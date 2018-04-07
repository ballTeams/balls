<?php
namespace manage\controllers;

use common\models\Message;
use manage\services\FootBallService;
use manage\services\MessageService;
use manage\services\OrderService;
use manage\services\RuleService;

/**
 * Site controller
 */
class OrderController extends BaseController
{
    /**
     * @name 交易订单列表
     * @return string
     */
    public function actionIndex(){
        $data=OrderService::service()->index();
        return $this->render('index',['data'=>$data]);
    }
}
