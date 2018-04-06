<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "apply_record".
 *
 * @property int $apply_record_id
 * @property int $user_id
 * @property string $change_money 变更金额
 * @property string $remark 说明
 * @property int $create_time 创建时间
 */
class ApplyRecord extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'apply_record';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['user_id', 'change_money', 'remark', 'create_time'], 'required'],
            [['user_id', 'create_time'], 'integer'],
            [['change_money'], 'number'],
            [['remark'], 'string', 'max' => 255],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'apply_record_id' => 'Apply Record ID',
            'user_id' => 'User ID',
            'change_money' => 'Change Money',
            'remark' => 'Remark',
            'create_time' => 'Create Time',
        ];
    }
}
