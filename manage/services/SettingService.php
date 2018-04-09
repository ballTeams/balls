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
use common\models\BankInfo;
use common\models\MatchInfo;
use common\models\MatchResult;
use common\models\Message;
use common\models\Order;
use common\models\Rule;
use common\models\User;
use yii\helpers\Json;

class SettingService extends BaseService
{

    public function add($data){
        $transaction=\Yii::$app->db->beginTransaction();
        try {
            BankInfo::deleteAll();
            $bank_info = new BankInfo();
            $bank_info->attributes = $data;
            if (!$bank_info->validate()) {
                throw new \Exception(Json::encode($bank_info->getErrors()));
            }
            $bank_info->insert();
            $transaction->commit();
        }catch (\Exception $e){
            $transaction->rollBack();
            return Json::encode(['status'=>0,'msg'=>$e->getMessage()]);
        }
        return Json::encode(['status'=>1,'msg'=>'保存成功']);
    }
}




