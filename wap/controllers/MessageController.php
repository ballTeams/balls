<?php
namespace wap\controllers;
use wap\services\FootBallService;
use wap\services\MessageService;


/**
 * Site controller
 */
class MessageController extends BaseController
{
    public function actionIndex()
    {
        return MessageService::service()->index();
    }

}
