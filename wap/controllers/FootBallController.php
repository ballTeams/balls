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

    public function actionMatchInfo()
    {
        $ball_match_id=\Yii::$app->request->get('ball_match_id',1);
        return FootBallService::service()->matchInfo($ball_match_id);
    }

}
