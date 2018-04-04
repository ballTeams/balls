<?php
namespace wap\controllers;
use wap\services\FootBallService;


/**
 * Site controller
 */
class FootBallController extends BaseController
{
    /**
     * @name 赛事列表
     * @return string
     */
    public function actionIndex()
    {
        return FootBallService::service()->index();
    }

    /**
     * @name 赛事详情
     * @return string
     */
    public function actionMatchInfo()
    {
        $ball_match_id=\Yii::$app->request->get('ball_match_id',1);
        return FootBallService::service()->matchInfo($ball_match_id);
    }

    public function actionBuy()
    {
        if(\Yii::$app->request->isPost){
            $data=\Yii::$app->request->post();
            return FootBallService::service()->buy($data);
        }
    }


}
