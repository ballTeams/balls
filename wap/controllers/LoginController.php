<?php
namespace wap\controllers;
use wap\services\FootBallService;
use wap\services\LoginService;
use yii\helpers\Json;
use yii\web\Controller;


/**
 * Site controller
 */
class LoginController extends Controller
{
    public function init()
    {
        $host=$_SERVER['HTTP_REFERER'];
        header("Access-Control-Allow-Origin: {$host}");
        header("Access-Control-Allow-Credentials: true");
        header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
        parent::init();
    }
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
