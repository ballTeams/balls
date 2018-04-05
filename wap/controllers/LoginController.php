<?php
namespace wap\controllers;
use wap\services\FootBallService;
use wap\services\LoginService;
use yii\helpers\Json;


/**
 * Site controller
 */
class LoginController extends BaseController
{
    /**
     * @name 登录
     * @return string
     */
    public function actionIndex()
    {
        $data=\Yii::$app->request->post();
        return LoginService::service()->index($data);
    }

    public function actionOut()
    {
        \Yii::$app->session->destroy();
        setcookie('user', '');
        return Json::encode(['status'=>0,'msg'=>'退出成功']);
    }

}
