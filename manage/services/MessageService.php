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
        $data=Message::find()
            ->select('*')
            ->asArray()
            ->all();
        foreach ($data as &$v){
            $v['create_time']=date('Y-m-d H:i:s',$v['create_time']);
        }
        return $data;
    }


    public function add($data){
        try {
            if(isset($data['message_id'])&&$data['message_id']){
                $result=Message::findOne($data['message_id']);
                $result->attributes=$data;
                if(!$result->validate()){
                    throw new \Exception(Json::encode($result->getErrors()));
                }
                $result->save();
            }else{
                $result=new Message();
                $result->create_time=time();
                $result->attributes=$data;
                if(!$result->validate()){
                    throw new \Exception(Json::encode($result->getErrors()));
                }
                $result->insert();
            }

        }catch (\Exception $e){
            return Json::encode(['status'=>0,'msg'=>$e->getMessage()]);
        }
        return Json::encode(['status'=>1,'msg'=>'保存成功']);
    }


    public function del($message_id)
    {
        try {
            BallMatch::deleteAll(['message_id'=>$message_id]);
        }catch (\Exception $e){
            return Json::encode(['status'=>0,'msg'=>$e->getMessage()]);
        }
        return Json::encode(['status'=>1,'msg'=>'删除成功']);
    }

    public function matchInfo($ball_match_id)
    {
        $data=MatchInfo::find()->where(['ball_match_id'=>$ball_match_id])->asArray()->all();
        return $data;

    }
}



