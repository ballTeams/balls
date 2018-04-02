<?php
/**
 * Created by PhpStorm.
 * User: unknown
 * Date: 2017/12/11
 * Time: 8:42
 */

namespace manage\services;


use common\models\BallMatch;
use common\models\MatchInfo;
use common\models\MatchResult;
use common\models\Message;
use yii\helpers\Json;

class MessageService extends BaseService
{

    public function index(){
        $data=Message::find()->asArray()->all();
        foreach ($data as &$v){
            $v['create_time']=date('Y-m-d H:i:s',$v['create_time']);
        }
        return $data;
    }


    public function add($data){
        try {
            if(isset($data['message_id'])&&$data['message_id']){
                $ball_match = Message::findOne($data['message_id']);
                $ball_match->attributes=$data;
                if(!$ball_match->validate()){
                    throw new \Exception(Json::encode($ball_match->getErrors()));
                }
                $ball_match->save();
            }else{
                $ball_match = new Message();
                $ball_match->create_time = time();
                if(!$ball_match->validate()){
                    throw new \Exception(Json::encode($ball_match->getErrors()));
                }
                $ball_match->insert();
            }

        }catch (\Exception $e){
            return Json::encode(['status'=>0,'msg'=>$e->getMessage()]);
        }
        return Json::encode(['status'=>1,'msg'=>'保存成功']);
    }


    public function del($message_id)
    {
        try {
            Message::deleteAll(['message_id'=>$message_id]);
        }catch (\Exception $e){
            return Json::encode(['status'=>0,'msg'=>$e->getMessage()]);
        }
        return Json::encode(['status'=>1,'msg'=>'删除成功']);
    }
}




