<?php
namespace wap\controllers;
use wap\services\FootBallService;
use wap\services\LoginService;


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

}
