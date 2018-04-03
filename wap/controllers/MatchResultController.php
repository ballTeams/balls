<?php
namespace wap\controllers;
use wap\services\MatchResultService;


/**
 * Site controller
 */
class MatchResultController extends BaseController
{
    public function actionIndex()
    {
        return MatchResultService::service()->index();
    }

}
