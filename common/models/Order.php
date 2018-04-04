<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "order".
 *
 * @property int $order_id
 * @property int $ball_match_id 购买的赛事ID
 * @property string $buy_result 购买的反比分 如1:2
 * @property int $buy_money 交易金额
 * @property int $charge 手续费
 * @property string $get_money 收益率
 * @property int $user_id 用户id
 * @property int $create_time 创建时间
 * @property int $match_info_id 波胆ID
 */
class Order extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'order';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['ball_match_id', 'buy_result', 'buy_money', 'charge', 'get_money', 'user_id', 'create_time', 'match_info_id'], 'required'],
            [['ball_match_id', 'buy_money', 'charge', 'user_id', 'create_time', 'match_info_id'], 'integer'],
            [['get_money'], 'number'],
            [['buy_result'], 'string', 'max' => 10],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'order_id' => 'Order ID',
            'ball_match_id' => 'Ball Match ID',
            'buy_result' => 'Buy Result',
            'buy_money' => 'Buy Money',
            'charge' => 'Charge',
            'get_money' => 'Get Money',
            'user_id' => 'User ID',
            'create_time' => 'Create Time',
            'match_info_id' => 'Match Info ID',
        ];
    }
}
