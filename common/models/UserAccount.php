<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "user_account".
 *
 * @property int $user_account_id
 * @property int $type 1 银行卡 2支付宝
 * @property string $account 账户信息
 */
class UserAccount extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'user_account';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['type', 'account'], 'required'],
            [['type'], 'string', 'max' => 3],
            [['account'], 'string', 'max' => 255],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'user_account_id' => 'User Account ID',
            'type' => 'Type',
            'account' => 'Account',
        ];
    }
}
