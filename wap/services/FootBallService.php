<?php
/**
 * Created by PhpStorm.
 * User: unknown
 * Date: 2017/12/11
 * Time: 8:42
 */

namespace wap\services;


use common\models\BallMatch;
use common\models\MatchInfo;
use yii\helpers\Json;

class FootBallService extends BaseService
{

    public function index(){
        $data=BallMatch::find()->asArray()->all();
        foreach ($data as &$v){
            $v['match_time']=date('Y-m-d H:i:s',$v['match_time']);
        }
        return Json::encode(['status'=>1,'msg'=>'success','data'=>$data]);
    }

    public function matchInfo($ball_match_id)
    {
        $data=MatchInfo::find()->where(['ball_match_id'=>$ball_match_id])->asArray()->all();
        foreach ($data as $k=>$v){
            if(!$v['content']){
                unset($data[$k]);
            }else{
                $data[$k]['content']=Json::decode($v['content']);
            }

        }
        return Json::encode(['status'=>1,'msg'=>'success','data'=>$data]);

    }
}



