<?php
namespace manage\controllers;

use Yii;
use yii\web\Controller;

/**
 * Site controller
 */
class SiteController extends Controller
{
    /**
     * @inheritdoc
     * @return array
     */

    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
        ];
    }
    public function actionIndex()
    {
        exit('welcome manage!');
    }
    public function actionTable()
    {
       return $this->render('table');
    }
    public function actionForm()
    {
       return $this->render('form');
    }
}
