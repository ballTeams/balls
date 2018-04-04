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
use common\models\User;
use yii\helpers\Json;

class UserService extends BaseService
{

    public function index(){
        $user_id=1;
        $data=User::find()->where(['pid'=>$user_id])->asArray()->all();
        return Json::encode(['status'=>1,'msg'=>'success','data'=>$data]);
    }
}



