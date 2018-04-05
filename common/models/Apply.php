<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "apply".
 *
 * @property int $apply_id
 * @property int $apply_amount 申请金额
 * @property int $user_id 用户id
 * @property int $create_time 申请时间
 * @property int $status 状态 0正在申请充值 ，打款 1确认打款，充值成功
 * @property int $type 1充值 2提现
 * @property int $is_cancel 是否取消 1取消 0未取消
 */
class Apply extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'apply';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['apply_amount', 'user_id', 'create_time', 'status'], 'required'],
            [['apply_amount', 'user_id', 'create_time'], 'integer'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'apply_id' => 'Apply ID',
            'apply_amount' => 'Apply Amount',
            'user_id' => 'User ID',
            'create_time' => 'Create Time',
            'status' => 'Status',
            'type' => 'Type',
            'is_cancel' => 'Is Cancel',
        ];
    }
}
