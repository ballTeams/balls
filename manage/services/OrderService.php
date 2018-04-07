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
use common\models\Order;
use common\models\Rule;
use yii\helpers\Json;

class OrderService extends BaseService
{

    public function index(){
        $data=Order::find()
            ->select('order.*,ball_match.title,content,user.name as user_name')
            ->leftJoin('ball_match','ball_match.ball_match_id=order.ball_match_id')
            ->leftJoin('user','user.user_id=order.user_id')
            ->asArray()
            ->all();
        $arr=['up'=>'上半场波胆','all'=>'全场波胆','total_ball'=>'总进球数'];
        foreach ($data as &$v){
            $v['create_time'] = date('Y-m-d H:i:s',$v['create_time']);
            $v['info_type'] = $arr[$v['info_type']];
        }
        return $data;
    }
}




