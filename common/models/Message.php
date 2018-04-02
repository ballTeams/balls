<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "message".
 *
 * @property int $message_id
 * @property string $title
 * @property string $content
 * @property int $create_time
 */
class Message extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'message';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['title', 'content', 'create_time'], 'required'],
            [['create_time'], 'integer'],
            [['title'], 'string', 'max' => 100],
            [['content'], 'string', 'max' => 200],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'message_id' => 'Message ID',
            'title' => 'Title',
            'content' => 'Content',
            'create_time' => 'Create Time',
        ];
    }
}
