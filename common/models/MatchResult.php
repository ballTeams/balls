<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "match_result".
 *
 * @property int $match_result_id
 * @property int $ball_match_id
 * @property string $all 下半场波胆
 * @property string $up 上半场波胆
 * @property int $total_ball 总进球数
 */
class MatchResult extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'match_result';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['ball_match_id', 'all', 'up', 'total_ball'], 'required'],
            [['ball_match_id', 'total_ball'], 'integer'],
            [['all', 'up'], 'string', 'max' => 10],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'match_result_id' => 'Match Result ID',
            'ball_match_id' => 'Ball Match ID',
            'all' => 'All',
            'up' => 'Up',
            'total_ball' => 'Total Ball',
        ];
    }
}
