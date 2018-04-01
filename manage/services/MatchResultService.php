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
use yii\helpers\Json;

class MatchResultService extends BaseService
{

    public function index(){
        $data=MatchResult::find()
            ->select('*')
            ->leftJoin('ball_match','ball_match.ball_match_id=match_result.ball_match_id')
            ->asArray()
            ->all();
        foreach ($data as &$v){
            $v['match_time']=date('Y-m-d H:i:s',$v['match_time']);
        }
        return $data;
    }


    public function add($data){
        try {
            if(isset($data['match_result_id'])&&$data['match_result_id']){
                $result=MatchResult::findOne($data['match_result_id']);
                $result->attributes=$data;
                if(!$result->validate()){
                    throw new \Exception(Json::encode($result->getErrors()));
                }
                $result->save();
            }else{
                $result=new MatchResult();
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


    public function del($ball_match_id)
    {
        try {
            BallMatch::deleteAll(['ball_match_id'=>$ball_match_id]);
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



