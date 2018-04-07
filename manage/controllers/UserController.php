<?php
namespace manage\controllers;


use common\models\User;
use manage\services\UserService;

/**
 * Site controller
 */
class UserController extends BaseController
{
    /**
     * @name 交易订单列表
     * @return string
     */
    public function actionIndex(){
        $data=UserService::service()->index();
        return $this->render('index',['data'=>$data]);
    }

    public function actionDel(){
        $user_id=\Yii::$app->request->get('id');
        return UserService::service()->del($user_id);
    }

    public function actionAdd(){
        if(\Yii::$app->request->isPost){
            $data=\Yii::$app->request->post();
            return UserService::service()->add($data);
        }
        $user_id=\Yii::$app->request->get('user_id');
        $user=User::find()->asArray()->all();
        $data=User::find()->where(['user_id'=>$user_id])->asArray()->one();
        return $this->render('add',['user'=>$user,'data'=>$data]);
    }


}
