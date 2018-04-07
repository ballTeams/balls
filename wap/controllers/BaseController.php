<?php
namespace wap\controllers;

use wap\services\BaseService;
use Yii;
use yii\filters\auth\CompositeAuth;
use yii\filters\auth\HttpBasicAuth;
use yii\filters\auth\HttpBearerAuth;
use yii\filters\auth\QueryParamAuth;
use yii\helpers\Json;
use yii\web\Controller;

/**
 * Base controller
 */
class BaseController extends Controller
{
    public function init()
    {
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Credentials: true");
        header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
        parent::init();
      
    }

    /*   public function behaviors()
       {
           $behaviors = parent::behaviors();
           $behaviors['authenticator'] = [
               'class' => CompositeAuth::className(),
               'authMethods' => [
                   HttpBasicAuth::className(),
                   HttpBearerAuth::className(),
                   QueryParamAuth::className(),
               ],
           ];
           return $behaviors;
       }*/

       public function beforeAction($action)
       {
           parent::beforeAction($action);
           if(!Yii::$app->session->get('user_id')){
               echo  Json::encode(['status'=>'-1','msg'=>'登录失效']);
               exit();
           }
           BaseService::$user_id= yii::$app->session->get('user_id');
           return $action;
       }
}