<?php
/**
 * Created by PhpStorm.
 * User: unknown
 * Date: 2017/12/11
 * Time: 8:42
 */

namespace manage\services;


use common\models\ApplyRecord;
use common\models\BallMatch;
use common\models\MatchInfo;
use common\models\MatchResult;
use common\models\Message;
use common\models\Order;
use common\models\Rule;
use common\models\User;
use yii\helpers\Json;

class UserResultService extends BaseService
{

    public function index(){
        $data=ApplyRecord::find()
            ->select('*')
            ->leftJoin('user','user.user_id=apply_record.user_id')
            ->asArray()
            ->all();
        return $data;
    }
}




