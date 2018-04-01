<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "match_info".
 *
 * @property int $match_info_id
 * @property string $type_name 阶段名称，全场波胆，上半场波胆，总进球数
 * @property string $content 比分选项，json
 * @property int $charge 手续费 %
 */
class MatchInfo extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'match_info';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['type_name', 'content', 'charge'], 'required'],
            [['charge'], 'integer'],
            [['type_name'], 'string', 'max' => 200],
            [['content'], 'string', 'max' => 500],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'match_info_id' => 'Match Info ID',
            'type_name' => 'Type Name',
            'content' => 'Content',
            'charge' => 'Charge',
        ];
    }
}
