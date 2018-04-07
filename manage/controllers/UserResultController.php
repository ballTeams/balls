<?php
namespace manage\controllers;


use common\models\User;
use manage\services\UserResultService;
use manage\services\UserService;

/**
 * Site controller
 */
class UserResultController extends BaseController
{
    /**
     * @name 交易订单列表
     * @return string
     */
    public function actionIndex(){
        $data=UserResultService::service()->index();
        return $this->render('index',['data'=>$data]);
    }


}
