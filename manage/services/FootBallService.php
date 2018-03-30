<?php
/**
 * Created by PhpStorm.
 * User: unknown
 * Date: 2017/12/11
 * Time: 8:42
 */

namespace manage\services;


use common\models\BallMatch;
use yii\helpers\Json;

class FootBallService extends BaseService
{

    public function index(){
        $data=BallMatch::find()->asArray()->all();
        foreach ($data as &$v){
            $v['match_time']=date('Y-m-d H:i:s',$v['match_time']);
        }
        return $data;
    }


    public function add($data){
        try {
            if(isset($data['ball_match_id'])&&$data['ball_match_id']){
                $ball_match = BallMatch::findOne($data['ball_match_id']);
                $ball_match->title = $data['title'];
                $ball_match->content = $data['content'];
                $ball_match->match_time = isset($data['match_time']) ? strtotime($data['match_time']) : time();
                $ball_match->create_time = time();
                if(!$ball_match->validate()){
                    throw new \Exception(Json::encode($ball_match->getErrors()));
                }
                $ball_match->save();
            }else{
                $ball_match = new BallMatch();
                $ball_match->title = $data['title'];
                $ball_match->content = $data['content'];
                $ball_match->match_time = isset($data['match_time']) ? strtotime($data['match_time']) : time();
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


    public function del($ball_match_id)
    {
        try {
            BallMatch::deleteAll(['ball_match_id'=>$ball_match_id]);
        }catch (\Exception $e){
            return Json::encode(['status'=>0,'msg'=>$e->getMessage()]);
        }
        return Json::encode(['status'=>1,'msg'=>'删除成功']);
    }
}



