<?php
/**
 * Created by PhpStorm.
 * User: unknown
 * Date: 2017/12/11
 * Time: 8:42
 */

namespace wap\services;


use common\models\MatchResult;
use yii\helpers\Json;

class MatchResultService extends BaseService
{

    public function index(){
        $data=MatchResult::find()->select('*')->leftJoin('ball_match','ball_match.ball_match_id=match_result.ball_match_id')->asArray()->all();
        foreach ($data as &$v){
            $v['create_time']=date('Y-m-d H:i:s',$v['create_time']);
        }
        return Json::encode(['status'=>1,'msg'=>'success','data'=>$data]);
    }
}



