<?php
namespace manage\controllers;

use common\models\BallMatch;
use common\models\MatchResult;
use common\models\Message;
use manage\services\FootBallService;
use manage\services\MatchResultService;
use manage\services\MessageService;

/**
 * Site controller
 */
class MessageController extends BaseController
{
    /**
     * @name 消息列表
     * @return string
     */
    public function actionIndex(){
        $data=MessageService::service()->index();
        return $this->render('index',['data'=>$data]);
    }

    /**
     * @name 添加
     * @return string
     */
    public function actionAdd(){
        if(\Yii::$app->request->isPost){
            $data=\Yii::$app->request->post();
            return MessageService::service()->add($data);
        }
        $message_id=\Yii::$app->request->get('message_id');
        $data=Message::find()->where(['message_id'=>$message_id])->asArray()->one();
        return $this->render('add',['data'=>$data]);
    }

    /**
     * @name 删除
     * @return string
     */
    public function actionDel(){
        $message_id=\Yii::$app->request->get('id');
        return FootBallService::service()->del($message_id);
    }
}
