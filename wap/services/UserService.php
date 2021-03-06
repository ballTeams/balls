<?php
/**
 * Created by PhpStorm.
 * User: unknown
 * Date: 2017/12/11
 * Time: 8:42
 */

namespace wap\services;


use common\models\BallMatch;
use common\models\Message;
use common\models\Order;
use common\models\User;
use common\models\UserAccount;
use yii\helpers\Json;

class UserService extends BaseService
{

    public function index($name){
        $user_id=self::$user_id;
        if($name){
            $data=User::find()->where(['like','name',$name])->asArray()->all();
        }else{
            $data=User::find()->asArray()->all();
        }
        $item=$this->getSon($data,$user_id);
        $arr['list']=$item;
        $arr['total_num']=count($item);
        $arr['share_num']=User::find()->where(['pid'=>$user_id])->count();
        return Json::encode(['status'=>1,'msg'=>'success','data'=>$arr]);
    }

    public function getSon($data,$pid,$son=[])
    {
        $user_id=self::$user_id;
        foreach ($data as $k => $v){
                if($v['pid']==$pid) {
                    if($pid==$user_id){
                        $v['percent']='60%';
                    }else{
                        $v['percent']='20%';
                    }
                    $son[] = $v;
                    return $this->getSon($data, $v['user_id'], $son);
                }
        }
        return $son;
    }

    public function add($data)
    {
        $user_id=self::$user_id;
        try {
            $buy_money=(int)Order::find()
                ->select('sum(buy_money)')
                ->where(['user_id'=>$user_id])->scalar();
            if($buy_money<5000){
                throw new \Exception('您交易金额未满5000');
            }
            if(!isset($data['name'])){
                throw new \Exception('账号名未提交');
            }
            $user = new User();
            $user->name = $data['name'];
            $user->pid=$user_id;
            $user->password = md5("123456");
            if(!$user->validate()){
                throw new \Exception(Json::encode($user->getErrors()));
            }
            $user->insert();
        }catch (\Exception $e){
            return Json::encode(['status'=>0,'msg'=>$e->getMessage()]);
        }
        return Json::encode(['status'=>1,'msg'=>'success']);

    }

    public function accountList()
    {
        $data= UserAccount::find()->asArray()->all();
        $arr=[];
        if($data){
            foreach ($data as $k=>$v){
                $v['account']=Json::decode($v['account']);
                $arr[$v['type']]=$v;

            }
        }
        return Json::encode(['status'=>1,'msg'=>'success','data'=>$arr]);
    }

    public function addAccount($data)
    {
        try {
            $user_id = 1;
            if (isset($data['user_account_id']) && $data['user_account_id']) {
                $account = UserAccount::findOne($data['user_account_id']);
            } else {
                $account = new UserAccount();
            }
            $account->account = Json::encode($data['account']);
            $account->type = $data['type'];
            $account->user_id = $user_id;
            if (!$account->validate()) {
                throw new \Exception(Json::encode($account->getErrors()));
            }
            $account->save();
        }catch (\Exception $e){
            return Json::encode(['status'=>0,'msg'=>$e->getMessage()]);
        }
        return Json::encode(['status'=>1,'msg'=>'success']);

    }

    public function edit($data)
    {
        try{
            $user_id=self::$user_id;
            $model=User::findOne($user_id);
            if(isset($data['password'])&&$data['password']){
                if(md5($data['old_password'])!=$model->password){
                    throw new \Exception('原登录密码不正确');
                }
                $model->password=md5($data['password']);
            }
            if(isset($data['trade_password'])&&$data['trade_password']){
                if(md5($data['old_trade_password'])!=$model->trade_password){
                    throw new \Exception('原交易密码不正确');
                }
                $model->trade_password=md5($data['trade_password']);
            }
            if(isset($data['real_name'])&&$data['real_name']){
                $model->real_name=$data['real_name'];
            }
            if(isset($data['mobile'])&&$data['mobile']){
                $model->mobile=$data['mobile'];
            }
            $model->save();
        }catch (\Exception $e){
            return Json::encode(['status'=>0,'msg'=>$e->getMessage()]);
        }
        return Json::encode(['status'=>1,'msg'=>'success']);


    }

    public function info()
    {
        $user_id=self::$user_id;
        $data=User::find()->where(['user_id'=>$user_id])->asArray()->one();
        return Json::encode(['status'=>1,'msg'=>'success','data'=>$data]);
    }
}



