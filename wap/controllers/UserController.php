<?php
namespace wap\controllers;
use wap\services\FootBallService;
use wap\services\MessageService;
use wap\services\UserService;
use yii\helpers\Json;


/**
 * Site controller
 */
class UserController extends BaseController
{
    public function actionIndex()
    {
        $name=\Yii::$app->request->get('name');
        return UserService::service()->index($name);
    }

    public function actionAdd(){
        if(\Yii::$app->request->isPost){
            $data=\Yii::$app->request->post();
            return UserService::service()->add($data);
        }else{
            return Json::encode(['status'=>1,'msg'=>'success']);
        }

    }

    public function actionAccountList()
    {
        if(\Yii::$app->request->isPost){
            $data=\Yii::$app->request->post();
            return UserService::service()->addAccount($data);
        }else{
            return UserService::service()->accountList();
        }

    }

    public function actionEdit(){
        if(\Yii::$app->request->isPost){
            $data=\Yii::$app->request->post();
            return UserService::service()->edit($data);
        }else{
            return UserService::service()->info();
        }
    }

}
