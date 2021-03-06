<?php
namespace manage\controllers;

use common\models\BallMatch;
use manage\services\FootBallService;

/**
 * Site controller
 */
class FootBallController extends BaseController
{
    /**
     * @name 赛事列表
     * @return string
     */
    public function actionIndex(){
        $data=FootBallService::service()->index();
        return $this->render('index',['data'=>$data]);
    }

    /**
     * @name 添加
     * @return string
     */
    public function actionAdd(){
        if(\Yii::$app->request->isPost){
            $data=\Yii::$app->request->post();
            return FootBallService::service()->add($data);
        }
        $ball_match_id=\Yii::$app->request->get('ball_match_id');
        $data=BallMatch::find()->where(['ball_match_id'=>$ball_match_id])->asArray()->one();
        return $this->render('add',['data'=>$data]);
    }

    /**
     * @name 删除
     * @return string
     */
    public function actionDel(){
        $ball_match_id=\Yii::$app->request->get('id');
        return FootBallService::service()->del($ball_match_id);
    }

    /**
     * @name 比分列表
     * @return string
     */
    public function actionMatchInfo()
    {
        $ball_match_id=\Yii::$app->request->get('ball_match_id');
        $data=FootBallService::service()->matchInfo($ball_match_id);
        return $this->render('match-info',['data'=>$data]);
    }

    /**
     * @name 比分设置
     * @return string
     */
    public function actionMatchInfoAdd()
    {
        $data=\Yii::$app->request->post();
        return FootBallService::service()->infoAdd($data);
    }
}
