<?php
namespace wap\controllers;

use common\models\Message;
use Yii;
use yii\helpers\Json;
use yii\web\Controller;

/**
 * Site controller
 */
class SiteController extends BaseController
{
    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
        ];
    }
    public function actionIndex()
    {
        exit('welcome wap!');
    }

    public function actionMessage()
    {
        $message=Message::find()->where(['is_show_bar'=>1])->asArray()->all();
        return Json::encode(['status'=>1,'msg'=>'success','data'=>$message]);
    }

}
