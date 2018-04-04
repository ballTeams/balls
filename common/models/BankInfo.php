<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "bank_info".
 *
 * @property int $id
 * @property string $bank_name
 * @property string $bank_number
 * @property string $bank_person_name
 */
class BankInfo extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'bank_info';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['bank_name', 'bank_number', 'bank_person_name'], 'required'],
            [['bank_name'], 'string', 'max' => 11],
            [['bank_number', 'bank_person_name'], 'string', 'max' => 20],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'bank_name' => 'Bank Name',
            'bank_number' => 'Bank Number',
            'bank_person_name' => 'Bank Person Name',
        ];
    }
}
