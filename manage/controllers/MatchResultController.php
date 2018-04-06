<?php
namespace manage\controllers;

use common\models\BallMatch;
use common\models\MatchResult;
use manage\services\FootBallService;
use manage\services\MatchResultService;

/**
 * Site controller
 */
class MatchResultController extends BaseController
{
    /**
     * @name 赛事结果列表
     * @return string
     */
    public function actionIndex(){
        $data=MatchResultService::service()->index();
        return $this->render('index',['data'=>$data]);
    }

    /**
     * @name 添加
     * @return string
     */
    public function actionAdd(){
        if(\Yii::$app->request->isPost){
            $data=\Yii::$app->request->post();
            return MatchResultService::service()->add($data);
        }
        $ball_match_id=\Yii::$app->request->get('ball_match_id');
        $data=MatchResult::find()->where(['ball_match_id'=>$ball_match_id])->asArray()->one();
        $ball_match=BallMatch::find()->asArray()->all();
        return $this->render('add',['data'=>$data,'ball_match'=>$ball_match]);
    }

    /**
     * @name 删除
     * @return string
     */
    public function actionDel(){
        $MatchResultService=\Yii::$app->request->get('id');
        return FootBallService::service()->del($MatchResultService);
    }

    public function actionOpenResult(){
        $match_result_id=\Yii::$app->request->get('match_result_id');
        return FootBallService::service()->openResult($match_result_id);
    }
}
