<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "ball_match".
 *
 * @property int $ball_match_id
 * @property string $title 标题
 * @property string $content 内容
 * @property int $match_time 比赛时间
 * @property int $create_time 创建时间
 */
class BallMatch extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'ball_match';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['match_time', 'create_time'], 'required'],
            [['match_time', 'create_time'], 'integer'],
            [['title', 'content'], 'string', 'max' => 200],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'ball_match_id' => 'Ball Match ID',
            'title' => 'Title',
            'content' => 'Content',
            'match_time' => 'Match Time',
            'create_time' => 'Create Time',
        ];
    }
}
