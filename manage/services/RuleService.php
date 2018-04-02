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
use common\models\Rule;
use yii\helpers\Json;

class RuleService extends BaseService
{

    public function index(){
        $data=Rule::find()->asArray()->one();
        return $data;
    }
    public function add($data){
        $rule= Rule::findOne($data['rule_id']);
        $rule->attributes=$data;
        if(!$rule->validate()){
            return Json::encode(['status'=>0,'msg'=>Json::encode($rule->getErrors())]);
        }
        $re=$rule->save();
        if($re){
            return Json::encode(['status'=>1,'msg'=>'保存成功']);
        }else{
            return Json::encode(['status'=>0,'msg'=>'保存失败']);
        }

    }
}




