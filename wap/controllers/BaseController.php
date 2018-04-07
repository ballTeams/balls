<?php
namespace wap\controllers;

use Yii;
use yii\filters\auth\CompositeAuth;
use yii\filters\auth\HttpBasicAuth;
use yii\filters\auth\HttpBearerAuth;
use yii\filters\auth\QueryParamAuth;
use yii\web\Controller;

/**
 * Base controller
 */
class BaseController extends Controller
{
    public function init()
    {
        header("Access-Control-Allow-Origin: http://192.168.1.100:8080 ");
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
       }

       public function beforeAction($action)
       {
           parent::beforeAction($action);
           $this->post = yii::$app->request->post();
           $this->get = yii::$app->request->get();
           $this->user = yii::$app->user->identity;
           $this->userId = Yii::$app->user->id;
           return $action;
       }*/
}