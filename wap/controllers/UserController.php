<?php
namespace wap\controllers;
use wap\services\FootBallService;
use wap\services\MessageService;
use wap\services\UserService;


/**
 * Site controller
 */
class UserController extends BaseController
{
    public function actionIndex()
    {
        return UserService::service()->index();
    }

    public function actionAdd(){

    }

}
