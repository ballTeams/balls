<?php
namespace manage\controllers;


use common\models\User;
use manage\services\ApplyService;
use manage\services\UserService;

/**
 * Site controller
 */
class ApplyController extends BaseController
{
    /**
     * @name 交易订单列表
     * @return string
     */
    public function actionIndex(){
        $data=ApplyService::service()->index();
        return $this->render('index',['data'=>$data]);
    }

    public function actionAgree(){
        $apply_id=\Yii::$app->request->get('id');
        return ApplyService::service()->agree($apply_id);
    }


}
