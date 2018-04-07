<?php
/**
 * Created by PhpStorm.
 * User: unknown
 * Date: 2017/12/11
 * Time: 8:42
 */

namespace manage\services;


use common\models\BallMatch;
use common\models\MatchInfo;
use common\models\MatchResult;
use common\models\Message;
use common\models\Order;
use common\models\Rule;
use common\models\User;
use yii\helpers\Json;

class UserService extends BaseService
{

    public function index(){
        $data=User::find()->where(['is_delete'=>0])->asArray()->all();
        return $data;
    }
    public function del($user_id)
    {
        try {
            User::updateAll(['is_delete'=>1],['user_id'=>$user_id]);
        }catch (\Exception $e){
            return Json::encode(['status'=>0,'msg'=>$e->getMessage()]);
        }
        return Json::encode(['status'=>1,'msg'=>'删除成功']);
    }

    public function add($data)
    {
        try {
            if(isset($data['user_id'])&&$data['user_id']){
                $user = User::findOne($data['user_id']);
                $user->pid = $data['pid'];
                if($data['password']){
                    $user->password = md5($data['password']);
                }
                $user->name = $data['name'];
                if (!$user->validate()) {
                    throw new \Exception(Json::encode($user->getErrors()));
                }
                $user->save();
            }else{
                $user = new User();
                $user->pid = $data['pid'];
                $user->fee = 0;
                $user->password = md5($data['password']);
                $user->name = $data['name'];
                if (!$user->validate()) {
                    throw new \Exception(Json::encode($user->getErrors()));
                }
                $user->insert();
            }

        }catch (\Exception $e){
            return Json::encode(['status'=>0,'msg'=>$e->getMessage()]);
        }
        return Json::encode(['status'=>1,'msg'=>'保存成功']);
    }
}




