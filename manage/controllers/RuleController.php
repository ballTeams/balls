<?php
namespace manage\controllers;

use common\models\Message;
use manage\services\FootBallService;
use manage\services\MessageService;
use manage\services\RuleService;

/**
 * Site controller
 */
class RuleController extends BaseController
{
    /**
     * @name 消息列表
     * @return string
     */
    public function actionIndex(){
        if(\Yii::$app->request->isPost){
            $data=\Yii::$app->request->post();
            return RuleService::service()->add($data);
        }
        $data=RuleService::service()->index();
        return $this->render('index',['data'=>$data]);
    }
}
