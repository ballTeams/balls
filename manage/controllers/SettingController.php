<?php
namespace manage\controllers;


use common\models\BankInfo;
use common\models\User;
use manage\services\SettingService;
use manage\services\UserResultService;
use manage\services\UserService;

/**
 * Site controller
 */
class SettingController extends BaseController
{
    /**
     * @name 交易订单列表
     * @return string
     */
    public function actionIndex(){
        if(\Yii::$app->request->isPost){
            $data=\Yii::$app->request->post();
            return SettingService::service()->add($data);
        }
        $bank_info=BankInfo::find()->asArray()->one();
        return $this->render('index',['data'=>$bank_info]);
    }


}
