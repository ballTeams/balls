<?php
namespace wap\controllers;
use wap\services\FootBallService;


/**
 * Site controller
 */
class FootBallController extends BaseController
{
    public function actionIndex()
    {
    	header("Access-Control-Allow-Origin:*");
        return FootBallService::service()->index();
    }

}
