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
use common\models\User;
use yii\helpers\Json;

class UserService extends BaseService
{

    public function index(){
        $user_id=1;
        $data=User::find()->asArray()->all();
        $item=$this->getSon($data,$user_id);
        return Json::encode(['status'=>1,'msg'=>'success','data'=>$item]);
    }

    public function getSon($data,$pid,$son=[])
    {
        $user_id=1;
        foreach ($data as $k => $v){
                if($v['pid']==$pid) {
                    if($pid==$user_id){
                        $v['percent']='60%';
                    }else{
                        $v['percent']='20%';
                    }
                    $son[] = $v;
                    return $this->getSon($data, $v['user_id'], $son);
                }
        }
        return $son;
    }
}



