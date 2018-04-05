<?php
namespace wap\controllers;
use wap\services\ApplyService;
use wap\services\FootBallService;
use wap\services\MessageService;
use wap\services\UserService;
use yii\helpers\Json;


/**
 * Site controller
 */
class ApplyController extends BaseController
{
    public function actionIndex()
    {
        return ApplyService::service()->index();
    }

    public function actionAdd()
    {
        if(\Yii::$app->request->isPost){
            $data=\Yii::$app->request->post();
            return ApplyService::service()->add($data);
        }else{
            return ApplyService::service()->info();
        }
    }

    public function actionWithdraw()
    {
        if(\Yii::$app->request->isPost){
            $data=\Yii::$app->request->post();
            $data['type']=2;
            return ApplyService::service()->add($data);
        }else{
            return ApplyService::service()->userInfo();
        }
    }
    public function actionInfo(){
        return ApplyService::service()->info();
    }

    public function actionRecord()
    {
        $type=\Yii::$app->request->get('type');
        return ApplyService::service()->record($type);
    }

}
