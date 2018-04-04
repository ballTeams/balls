<?php
/**
 * Created by PhpStorm.
 * User: unknown
 * Date: 2017/12/11
 * Time: 8:42
 */

namespace wap\services;


use common\models\BallMatch;
use common\models\MatchInfo;
use common\models\Order;
use common\models\User;
use yii\db\Expression;
use yii\helpers\Json;

class FootBallService extends BaseService
{

    public function index(){
        $data=BallMatch::find()->asArray()->all();
        foreach ($data as &$v){
            $v['match_time']=date('Y-m-d H:i:s',$v['match_time']);
        }
        return Json::encode(['status'=>1,'msg'=>'success','data'=>$data]);
    }

    public function matchInfo($ball_match_id)
    {
        $list=MatchInfo::find()
            ->where(['ball_match_id'=>$ball_match_id])->asArray()->all();
        foreach ($list as $k=>$v){
            if(!$v['content']){
                unset($list[$k]);
            }else{
                $list[$k]['content']=Json::decode($v['content']);
            }

        }
        $match=BallMatch::findOne($ball_match_id);
        $data['match_name']='['.$match->title.']'.$match->content;
        $data['list']=$list;
        $data['money_arr']=[1000,5000,10000,15000,20000];
        return Json::encode(['status'=>1,'msg'=>'success','data'=>$data]);

    }

    public function buy($data)
    {
        $transaction=\Yii::$app->db->beginTransaction();
        try {
            $user_id=1;//@todo 暂时写死
            $user=User::findOne($user_id);
            if($user->fee<$data['buy_money']){
                throw new \Exception('您账户余额不足');
            }
            User::updateAll(['fee'=>new Expression("fee-{$data['buy_money']}")],['user_id'=>$user_id]);
            $order = new Order();
            $order->ball_match_id = $data['ball_match_id'];
            $order->buy_result = $data['buy_result'];
            $order->buy_money = $data['buy_money'];
            $order->get_money = $data['money'];
            $order->charge = $data['charge'];
            $order->user_id = $user_id;
            $order->match_info_id = $data['match_info_id'];
            $order->create_time = time();
            if (!$order->validate()) {
                throw new \Exception(Json::encode($order->getErrors()));
            }
            $transaction->commit();
        }catch (\Exception $e){
            $transaction->rollBack();
            return Json::encode(['status'=>0,'msg'=>$e->getMessage()]);
        }
        return Json::encode(['status'=>1,'msg'=>'success']);
    }
}



