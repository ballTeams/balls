<?php
/**
 * Created by PhpStorm.
 * User: unknown
 * Date: 2017/12/11
 * Time: 8:42
 */

namespace manage\services;


use common\models\Apply;
use common\models\ApplyRecord;
use common\models\BallMatch;
use common\models\MatchInfo;
use common\models\MatchResult;
use common\models\Order;
use common\models\User;
use yii\db\Expression;
use yii\helpers\Json;

class FootBallService extends BaseService
{
    public $order;

    public function index(){
        $data=BallMatch::find()->asArray()->all();
        foreach ($data as &$v){
            $v['match_time']=date('Y-m-d H:i:s',$v['match_time']);
        }
        return $data;
    }


    public function add($data){
        try {
            if(isset($data['ball_match_id'])&&$data['ball_match_id']){
                $ball_match = BallMatch::findOne($data['ball_match_id']);
                $ball_match->title = $data['title'];
                $ball_match->content = $data['content'];
                $ball_match->match_time = isset($data['match_time']) ? strtotime($data['match_time']) : time();
                $ball_match->create_time = time();
                if(!$ball_match->validate()){
                    throw new \Exception(Json::encode($ball_match->getErrors()));
                }
                $ball_match->save();
            }else{
                $ball_match = new BallMatch();
                $ball_match->title = $data['title'];
                $ball_match->content = $data['content'];
                $ball_match->match_time = isset($data['match_time']) ? strtotime($data['match_time']) : time();
                $ball_match->create_time = time();
                if(!$ball_match->validate()){
                    throw new \Exception(Json::encode($ball_match->getErrors()));
                }
                $ball_match->insert();
            }

        }catch (\Exception $e){
            return Json::encode(['status'=>0,'msg'=>$e->getMessage()]);
        }
        return Json::encode(['status'=>1,'msg'=>'保存成功']);
    }


    public function del($ball_match_id)
    {
        try {
            BallMatch::deleteAll(['ball_match_id'=>$ball_match_id]);
        }catch (\Exception $e){
            return Json::encode(['status'=>0,'msg'=>$e->getMessage()]);
        }
        return Json::encode(['status'=>1,'msg'=>'删除成功']);
    }


    public function matchInfo($ball_match_id)
    {
        $data=MatchInfo::find()->where(['ball_match_id'=>$ball_match_id])->asArray()->all();
        foreach ($data as &$v){
            $v['content']=Json::decode($v['content']);
        }
        return $data;

    }

    public function infoAdd($data)
    {
        $arr[0]="全场波胆";
        $arr[1]="上半场波胆";
        $arr[2]="总进球数";
        $info_type[0]="all";
        $info_type[1]="up";
        $info_type[2]="total_ball";
        MatchInfo::deleteAll(['ball_match_id'=>$data['ball_match_id']]);
        $i=0;
        foreach ($data as $k=>$v){
            if(isset($v['list'])){
                $info=new MatchInfo();
                $info->type_name=$arr[$i];
                $info->content=Json::encode($v['list']);
                $info->charge=$v['charge'];
                $info->info_type=$info_type[$i];
                $info->ball_match_id=$data['ball_match_id'];
                $info->insert();
                $i++;
            }
        }
        return Json::encode(['status'=>1,'msg'=>'保存成功']);
    }

    public function openResult($match_result_id)
    {
        try {
            $result = MatchResult::find()->where(['match_result_id' => $match_result_id])->asArray()->one();
            $order = Order::find()->where(['ball_match_id' => $result['ball_match_id']])->asArray()->all();
            foreach ($order as $k => $v) {
                //status 0 等待公布  1亏  2盈
                if ($v['info_type'] == 'all') {
                    if ($v['buy_result'] == $result['all']) {
                        Order::updateAll(['status' => 1], ['order_id' => $v['order_id']]);
                    } else {
                        Order::updateAll(['status' => 2], ['order_id' => $v['order_id']]);
                        $this->order = $v;
                        $this->parentApply("all");
                    }

                } elseif ($v['info_type'] == 'up') {
                    if ($v['buy_result'] == $result['up']) {
                        Order::updateAll(['status' => 1], ['order_id' => $v['order_id']]);
                    } else {
                        Order::updateAll(['status' => 2], ['order_id' => $v['order_id']]);
                    }

                } elseif ($v['info_type'] == 'total_ball') {
                    if ($v['buy_result'] == $result['total_ball']) {
                        Order::updateAll(['status' => 1], ['order_id' => $v['order_id']]);
                    } else {
                        Order::updateAll(['status' => 2], ['order_id' => $v['order_id']]);
                    }
                }
            }
        }catch (\Exception $e){
            echo $e->getMessage();die;
        }
        echo '结算成功';
    }

    private function parentApply($info_type)
    {
        $transaction=\Yii::$app->db->beginTransaction();
        try {
            $order = $this->order;
            $match_info='['.BallMatch::findOne($order['ball_match_id'])->title.']'.BallMatch::findOne($order['ball_match_id'])->content;
            if($info_type=='all'){
                $info_text='全场波胆';
            }elseif ($info_type=='up'){
                $info_text='上半场波胆';
            }else{
                $info_text='总进球数';
            }
            $order['get_money']=$order['get_money']/100;
            $order['charge']=$order['charge']/100;
            $change_money = $order['buy_money'] * ($order['charge'] - $order['get_money']);
            $result = MatchResult::find()->select('all,up,total_ball')->where(['ball_match_id' => $order['ball_match_id']])->asArray()->one();
            $record = new ApplyRecord();
            $record->user_id = $order['user_id'];
            $record->action_user_id = $order['user_id'];
            $record->change_money = $change_money;
            $record->type = 1;
            $record->remark = "赛事:{$match_info},{$info_text} ，购买比分:{$order['buy_result']}，结果比分:{$result[$info_type]}。
        收益计算：{$order['buy_money']}*({$order['charge']}-{$order['get_money']})";
            $record->create_time = time();
            if (!$record->validate()) {
                throw  new \Exception(Json::encode($record->getErrors()));
            }
            $record->insert();
            User::updateAll(['fee'=>new Expression("fee+{$change_money}")],['user_id'=>$order['user_id']]);


            //上级
            $pid=User::findOne($order['user_id'])->pid;
            if($pid){
                $user=User::find()->where(['user_id'=>$pid])->asArray()->one();
                $change_money = $order['buy_money'] * $order['get_money']*0.6;
                $record = new ApplyRecord();
                $record->user_id = $user['user_id'];
                $record->change_money = $change_money;
                $record->type = 2;
                $record->action_user_id = $order['user_id'];
                $record->remark = "直推下级盈利,结算：{$order['buy_money']}*{$order['get_money']}*0.6";
                $record->create_time = time();
                if (!$record->validate()) {
                    throw  new \Exception(Json::encode($record->getErrors()));
                }
                $record->insert();
                User::updateAll(['fee'=>new Expression("fee+{$change_money}")],['user_id'=>$user['user_id']]);


                //上上级
                $pid=User::findOne($user['user_id'])->pid;
                if($pid){
                    $user=User::find()->where(['user_id'=>$pid])->asArray()->one();
                    $change_money = $order['buy_money'] * $order['get_money']*0.2;
                    $record = new ApplyRecord();
                    $record->user_id = $user['user_id'];
                    $record->change_money = $change_money;
                    $record->type = 2;
                    $record->action_user_id = $order['user_id'];
                    $record->remark = "间接推下级盈利,结算：{$order['buy_money']}*{$order['get_money']}*0.2";
                    $record->create_time = time();
                    if (!$record->validate()) {
                        throw  new \Exception(Json::encode($record->getErrors()));
                    }
                    $record->insert();
                    User::updateAll(['fee'=>new Expression("fee+{$change_money}")],['user_id'=>$user['user_id']]);
                }

        }
            $transaction->commit();
        }catch (\Exception $e){
            $transaction->rollBack();
            throw new \Exception($e->getMessage());
        }
    }

}



