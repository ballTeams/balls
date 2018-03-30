<?php
namespace manage\controllers;

use manage\services\FootBallService;

/**
 * Site controller
 */
class FootBallController extends BaseController
{
    public function actionIndex(){
        $data=FootBallService::service()->index();
        return $this->render('index',['data'=>$data]);
    }
}
