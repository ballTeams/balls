<?php
/**
 * Created by PhpStorm.
 * User: unknown
 * Date: 2017/12/11
 * Time: 8:42
 */

namespace wap\services;


use common\models\Apply;
use common\models\ApplyRecord;
use common\models\BallMatch;
use common\models\BankInfo;
use common\models\Message;
use common\models\User;
use common\models\UserAccount;
use yii\helpers\Json;

class ApplyService extends BaseService
{

    public function index(){
        $user_id=self::$user_id;
        $data=User::find()->where(['pid'=>$user_id])->asArray()->all();
        return Json::encode(['status'=>1,'msg'=>'success','data'=>$data]);
    }

    public function add($data)
    {
        try {
            $user_id = self::$user_id;
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

    public function transfer($data)
    {
        try {
            $trade_password=User::findOne(self::$user_id)->trade_password;
            if(md5($data['trade_password'])!=$trade_password){
                throw new \Exception('交易密码正确');
            }
            $user=User::find()->where(['name'=>$data['name']])->asArray()->one();
            if(!$user){
                throw new \Exception('用户不存在');
            }
            $transfer_user_id=$user['user_id'];
            $user_id = self::$user_id;
            $model = new Apply();
            $model->apply_amount = $data['apply_amount'];
            $model->user_id = $user_id;
            $model->transfer_user_id = $transfer_user_id;
            $model->create_time = time();
            $model->status = 0;
            $model->type = 3;
            $model->is_cancel = 0;
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
        $user_id=self::$user_id;
        $data=Apply::find()->where(['user_id'=>$user_id])->andWhere(['type'=>1])->andWhere(['status'=>0])->asArray()->one();
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
        $user_id=self::$user_id;
        $data=Apply::find()->where(['user_id'=>$user_id])->andWhere(['type'=>2])->andWhere(['status'=>0])->asArray()->one();
        if($data){
            $data['create_time']=date('Y-m-d H:i:s',$data['create_time']);
            $item['apply_info']=$data;
            $bank=UserAccount::find()->select('account')->where(['user_account_id'=>$data['user_account_id']])->asArray()->scalar();
            $item['bank_info']=$bank?Json::decode($bank):[];
            return Json::encode(['status'=>1,'msg'=>'success','data'=>$item]);
        }else{
            $item= UserAccount::find()->select('user_account_id,type')->asArray()->all();
            if($item){
                foreach ($item as &$v){
                    if($v['type']==1){
                        $v['account_name']= '银行卡收款';
                    }
                    if($v['type']==2){
                        $v['account_name']= '支付宝收款';
                    }
                }
            }
            return Json::encode(['status'=>0,'msg'=>'无提现申请','data'=>$item]);
        }

    }

    public function transferInfo(){
        $user_id=self::$user_id;
        $data=Apply::find()->where(['user_id'=>$user_id])->andWhere(['type'=>3])->andWhere(['status'=>0])->asArray()->one();
        if($data){
            $data['create_time']=date('Y-m-d H:i:s',$data['create_time']);
            $data['transfer_user_name']=User::findOne($data['transfer_user_id'])->name;
            return Json::encode(['status'=>1,'msg'=>'success','data'=>$data]);
        }else{
            return Json::encode(['status'=>0,'msg'=>'无转账申请']);
        }
    }

    public function record($type)
    {
        $user_id=self::$user_id;
        $data=Apply::find()
            ->where(['user_id'=>$user_id])
            ->andWhere(['type'=>$type])
            ->asArray()
            ->all();
        foreach ($data as &$v){
            $v['create_time']=date('Y-m-d H:i:s',$v['create_time']);
            if($v['status']==0){
                $v['status_text']="申请中";
            }else{
                $v['status_text']="交易成功";
            }
            if($v['type']==1){
                $v['type_text']="充值";
            }elseif ($v['type']==2) {
                $v['type_text'] = "提现";
            }else{
                $v['type_text'] = "转账";
            }
        }
        $item['total_money']=(int)Apply::find()
            ->select('sum(apply_amount)')
            ->where(['user_id'=>$user_id])
            ->andWhere(['type'=>2])
            ->asArray()
            ->scalar();
        $item['list']=$data;
        return Json::encode(['status'=>1,'msg'=>'success','data'=>$item]);
    }

    public function getList()
    {
        $user_id=self::$user_id;
        $data=ApplyRecord::find()->where(['user_id'=>$user_id,'type'=>2])->asArray()->all();
        foreach ($data as &$v){
            if($v['action_user_id']){
                $v['action_name']=User::findOne($v['action_user_id'])->name;
            }else{
                $v['action_name']='';
            }
            $v['remark']="团队成员：".$v['action_name'].','.$v['remark'];
            $v['create_time']=date('Y-m-d H:i:s',$v['create_time']);
        }
        $item['list']=$data;
        $item['total']=(int)ApplyRecord::find()
            ->select('sum(change_money)')
            ->where(['user_id'=>$user_id,'type'=>2])
            ->scalar();
        return Json::encode(['status'=>1,'msg'=>'success','data'=>$item]);
    }
}



