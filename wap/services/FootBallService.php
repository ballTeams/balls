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
        $list=MatchInfo::find()
            ->where(['ball_match_id'=>$ball_match_id])->asArray()->all();
        foreach ($list as $k=>$v){
            if(!$v['content']){
                unset($list[$k]);
            }else{
                $list[$k]['content']=Json::decode($v['content']);
            }

        }
        $match=BallMatch::findOne($ball_match_id);
        $data['match_name']='['.$match->title.']'.$match->content;
        $data['list']=$list;
        $data['money_arr']=[1000,5000,10000,15000,20000];
        return Json::encode(['status'=>1,'msg'=>'success','data'=>$data]);

    }
}



