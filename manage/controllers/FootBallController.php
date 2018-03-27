<?php
namespace manage\controllers;

use manage\services\FootBallService;

/**
 * Site controller
 */
class FootBallController extends BaseController
{
    public function actionIndex(){
        FootBallService::service()->index();
    }
}
