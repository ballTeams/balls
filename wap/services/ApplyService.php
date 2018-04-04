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
use common\models\Message;
use common\models\User;
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
            $model->type = 1;
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
}



