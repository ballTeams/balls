<?php
/**
 * Created by PhpStorm.
 * User: unknown
 * Date: 2017/12/11
 * Time: 8:42
 */

namespace wap\services;


use common\models\BallMatch;
use common\models\User;
use yii\helpers\Json;

class LoginService extends BaseService
{

    public function index($data){

        $user=User::find()->where(['name'=>$data['name']])->asArray()->one();
        if(!$user){
            throw new \Exception('用户不存在');
        }
        if(md5($data['password'])!=$user['password']){
            throw new \Exception('密码错误');
        }
        \Yii::$app->session->set('user_id',$user['user_id']);
        setcookie('user',Json::encode($user),0,'/');
        return Json::encode(['status'=>1,'msg'=>'success','data'=>$data]);
    }
}



