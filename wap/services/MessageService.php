<?php
/**
 * Created by PhpStorm.
 * User: unknown
 * Date: 2017/12/11
 * Time: 8:42
 */

namespace wap\services;


use common\models\BallMatch;
use common\models\Message;
use yii\helpers\Json;

class MessageService extends BaseService
{

    public function index(){
        $data=Message::find()->asArray()->all();
        foreach ($data as &$v){
            $v['title']=$v['title'].date('Y-m-d',$v['create_time']);
            $v['create_time']=date('Y-m-d H:i',$v['create_time']);
        }
        return Json::encode(['status'=>1,'msg'=>'success','data'=>$data]);
    }
}



