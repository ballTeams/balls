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
        return FootBallService::service()->index();
    }

}
