<?php
/**
 * Created by PhpStorm.
 * User: unknown
 * Date: 2017/12/11
 * Time: 8:42
 */

namespace wap\services;


use common\models\Apply;
use common\models\BallMatch;
use common\models\BankInfo;
use common\models\Message;
use common\models\User;
use common\models\UserAccount;
use yii\helpers\Json;

class ApplyService extends BaseService
{

    public function index(){
        $user_id=1;
        $data=User::find()->where(['pid'=>$user_id])->asArray()->all();
        return Json::encode(['status'=>1,'msg'=>'success','data'=>$data]);
    }

    public function add($data)
    {
        try {
            $user_id = 1;
            $model = new Apply();
            $model->apply_amount = $data['apply_amount'];
            $model->user_id = $user_id;
            $model->create_time = time();
            $model->status = 0;
            $model->type = isset($data['type'])?$data['type']:1;
            $model->is_cancel = 0;
            if(isset($data['type'])&&$data['type']==2){
                if(isset($data['user_account_id'])||!$data['user_account_id']){
                    throw new \Exception('收款方式未选择');
                }
                $model->user_account_id= $data['user_account_id'];
            }
            if(!$model->validate()){
                throw new \Exception(Json::encode($model->getErrors()));
            }
            $model->insert();
        }catch (\Exception $e){
            return Json::encode(['status'=>0,'msg'=>$e->getMessage()]);
        }
        return Json::encode(['status'=>1,'msg'=>'success']);

    }

    public function info()
    {
        $user_id=1;
        $data=Apply::find()->where(['user_id'=>$user_id])->andWhere(['type'=>1])->asArray()->one();
        if($data){
            $data['create_time']=date('Y-m-d H:i:s',$data['create_time']);
            $item['apply_info']=$data;
            $bank=BankInfo::find()->asArray()->one();
            $item['bank_info']=$bank;
            return Json::encode(['status'=>1,'msg'=>'success','data'=>$item]);
        }else{
            return Json::encode(['status'=>0,'msg'=>'无充值申请']);
        }

    }

    public function userInfo()
    {
        $user_id=1;
        $data=Apply::find()->where(['user_id'=>$user_id])->andWhere(['type'=>2])->asArray()->one();
        if($data){
            $data['create_time']=date('Y-m-d H:i:s',$data['create_time']);
            $item['apply_info']=$data;
            $bank=UserAccount::find()->select('account')->where(['user_account_id'=>$data['user_account_id']])->asArray()->one();
            $item['bank_info']=$bank;
            return Json::encode(['status'=>1,'msg'=>'success','data'=>$item]);
        }else{
            return Json::encode(['status'=>0,'msg'=>'无提现申请']);
        }

    }
}



