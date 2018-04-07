<?php
/**
 * Created by PhpStorm.
 * User: unknown
 * Date: 2017/12/11
 * Time: 8:42
 */

namespace manage\services;


use common\models\Apply;
use common\models\BallMatch;
use common\models\MatchInfo;
use common\models\MatchResult;
use common\models\Message;
use common\models\Order;
use common\models\Rule;
use common\models\User;
use yii\db\Expression;
use yii\helpers\Json;

class ApplyService extends BaseService
{

    public function index(){
        $data=Apply::find()
            ->select('*')
            ->leftJoin('user','user.user_id=apply.user_id')
            ->asArray()
            ->all();
        foreach ($data as &$v){
            if($v['type']==1){
                $v['type_text']=  "充值申请";
            }elseif($v['type']==2){
                $v['type_text']=  "提现申请";
            }else{
                $v['type_text']=  "转账申请";
            }
            $v['create_time']=date('Y-m-d H:i:s',$v['create_time']);

        }


        return $data;
    }
    public function agree($apply_id)
    {
        $transaction=\Yii::$app->db->beginTransaction();
        try {
            Apply::updateAll(['status'=>1],['apply_id'=>$apply_id]);
            //1充值 2提现
            $apply=Apply::findOne($apply_id);
            $user_id=$apply->user_id;
            $transfer_user_id=$apply->transfer_user_id;
            if($apply->type==1){
                User::updateAll(['fee'=>new Expression("fee+{$apply->apply_amount}")],['user_id'=>$user_id]);
            }elseif($apply->type==2){
                if(User::findOne($user_id)->fee<$apply->apply_amount){
                    throw new \Exception('余额不足,无法提现');
                }
                User::updateAll(['fee'=>new Expression("fee-{$apply->apply_amount}")],['user_id'=>$user_id]);
            }else{
                if(User::findOne($user_id)->fee<$apply->apply_amount){
                    throw new \Exception('余额不足,无法转账');
                }
                User::updateAll(['fee'=>new Expression("fee-{$apply->apply_amount}")],['user_id'=>$user_id]);
                User::updateAll(['fee'=>new Expression("fee+{$apply->apply_amount}")],['user_id'=>$transfer_user_id]);
            }
            $transaction->commit();
        }catch (\Exception $e){
            $transaction->rollBack();
            return Json::encode(['status'=>0,'msg'=>$e->getMessage()]);
        }
        return Json::encode(['status'=>1,'msg'=>'删除成功']);
    }
}




