<?php

/* @var $this \yii\web\View */
/* @var $content string */

use manage\assets\AppAsset;
use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use common\widgets\Alert;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="/css/normalize.css"/>
    <link rel="stylesheet" href="/css/style.css?v=12"/>
    <script src="/js/plugins/jquery-2.1.1.min.js"></script>
    <script src="/js/plugins/doT/doT.js"></script>
    <script src="/js/plugins/underscore/underscore-min.js"></script>
    <script src="/js/plugins/layer/layer.js"></script>
    <script src="/js/plugins/laydate/laydate.js"></script>
    <script src="/js/common.js?v=122"></script>
    <title></title>
    <style>
        .edui-editor{
            z-index: 10000!important;
        }
        .g-sidebar .__nav-list li.active > a{
            color: #696969;
        }
    </style>
</head>
<body>
<?php $this->beginBody() ?>
<div class="g-topbar"><?php if (\Yii::$app->controller->id == 'ball1_1') { ?>
        足球列表
    <?php } elseif (\Yii::$app->controller->id == 'ball1_2') { ?>
        足球详情
    <?php } elseif (\Yii::$app->controller->id == 'ball2_1') { ?>
        篮球列表
    <?php } elseif (\Yii::$app->controller->id == 'ball2_2') { ?>
        篮球详情
    <?php } elseif (\Yii::$app->controller->id == 'ball3_1') { ?>
        波胆记录
    <?php } elseif (\Yii::$app->controller->id == 'ball4_1') { ?>
        交易记录
    <?php } elseif (\Yii::$app->controller->id == 'ball5_1') { ?>
        足球赛事
    <?php } elseif (\Yii::$app->controller->id == 'ball5_2') { ?>
        篮球赛事
    <?php } elseif (\Yii::$app->controller->id == 'ball6_1') { ?>
        团队总数
    <?php } elseif (\Yii::$app->controller->id == 'ball6_2') { ?>
        直推总数
    <?php } elseif (\Yii::$app->controller->id == 'ball6_3') { ?>
        会员列表
    <?php } elseif (\Yii::$app->controller->id == 'ball7_1') { ?>
        基础信息
    <?php } elseif (\Yii::$app->controller->id == 'ball7_2') { ?>
        绑定的银行卡
    <?php } elseif (\Yii::$app->controller->id == 'ball7_3') { ?>
        交易密码
    <?php } elseif (\Yii::$app->controller->id == 'ball7_4') { ?>
        登录密码
    <?php } elseif (\Yii::$app->controller->id == 'ball8_1') { ?>
        平台规则
    <?php } elseif (\Yii::$app->controller->id == 'ball9_1') { ?>
        账变记录
    <?php } elseif (\Yii::$app->controller->id == 'ball9_2') { ?>
        财务记录
    <?php } elseif (\Yii::$app->controller->id == 'ball9_3') { ?>
        充值记录
    <?php } elseif (\Yii::$app->controller->id == 'ball9_4') { ?>
        体现记录
    <?php } elseif (\Yii::$app->controller->id == 'ball10_1') { ?>
        代理中心
    <?php } elseif (\Yii::$app->controller->id == 'ball11_1') { ?>
        网站列表
    <?php } elseif (\Yii::$app->controller->id == 'ball12_1') { ?>
        系统公告
    <?php } elseif (\Yii::$app->controller->id == 'ball12_2') { ?>
        赛事公告
    <?php } elseif (\Yii::$app->controller->id == 'ball12_3') { ?>
        新闻
    <?php } ?>
</div>
<div class="g-sidebar min">
    <span class="_toggle js-toggle-sidebar"><span class="iconfont icon-qiehuan"></span></span>
    <div class="_top">
        <div class="__avatar">
            <img src="/images/1zh.jpg">
        </div>
        <div class="__user js-edit-admin">
            <span><?php echo Yii::$app->session->get('username') ?></span>
            <ul class="_dropdown-menu" style="display: none;">
                <li><a class="js-main-exit" href="javascript:;">退出</a></li>
            </ul>
        </div>
    </div>
    <div class="g-scroll-list">
        <ul class="_nav-list js-sider-toggle">
            <li <?php if (in_array(\Yii::$app->controller->id,['ball1_1', 'ball1_2'])) { ?> class="active" <?php } ?>>
                <a href="#">
                    <span class="iconfont icon-neirong"></span>赛事
                </a>
                <ul class="__nav-list" <?php if (in_array(\Yii::$app->controller->id, ['foot-ball', 'ball1_2'])) { ?> style="display: block;" <?php } ?>>
                    <li <?php if (\Yii::$app->controller->id == 'foot-ball'){ ?>class="active"<?php } ?>>
                        <a href="<?php echo \yii\helpers\Url::to(['foot-ball/index']) ?>">
                            <span></span>赛事列表
                        </a>
                    </li>
                </ul>
            </li>
            <li <?php if (in_array(\Yii::$app->controller->id,['ball5_1', 'ball5_2'])) { ?> class="active" <?php } ?>>
                <a href="#">
                    <span class="iconfont icon-neirong"></span>赛事结果
                </a>
                <ul class="__nav-list"
                    <?php if (in_array(\Yii::$app->controller->id, ['match-result'])) { ?> style="display: block;" <?php } ?>>
                    <li <?php if (\Yii::$app->controller->id == 'match-result'){ ?>class="active"<?php } ?>>
                        <a href="<?php echo \yii\helpers\Url::to(['match-result/index']) ?>">
                            <span></span>赛事结果
                        </a>
                    </li>
                </ul>
            </li>

            <li <?php if (in_array(\Yii::$app->controller->id,['rule'])) { ?> class="active" <?php } ?>>
                <a href="#">
                    <span class="iconfont icon-neirong"></span>平台规则
                </a>
                <ul class="__nav-list"
                    <?php if (in_array(\Yii::$app->controller->id, ['rule'])) { ?> style="display: block;" <?php } ?>>
                    <li <?php if (\Yii::$app->controller->id == 'rule'){ ?>class="active"<?php } ?>>
                        <a href="<?php echo \yii\helpers\Url::to(['rule/index']) ?>">
                            <span></span>平台规则
                        </a>
                    </li>
                </ul>
            </li>

            <li <?php if (in_array(\Yii::$app->controller->id,['ball12_1', 'ball12_2', 'ball12_3'])) { ?> class="active" <?php } ?>>
                <a href="#">
                    <span class="iconfont icon-neirong"></span>公告
                </a>
                <ul class="__nav-list"
                    <?php if (in_array(\Yii::$app->controller->id, ['message'])) { ?> style="display: block;" <?php } ?>>
                    <li <?php if (\Yii::$app->controller->id == 'message'){ ?>class="active"<?php } ?>>
                        <a href="<?php echo \yii\helpers\Url::to(['message/index']) ?>">
                            <span></span>系统公告
                        </a>
                    </li>
                </ul>
            </li>
            <li <?php if (in_array(\Yii::$app->controller->id, ['user-result'])) { ?> class="active" <?php } ?>>
                <a href="#">
                    <span class="iconfont icon-neirong"></span>用户赢亏益记录
                </a>
                <ul class="__nav-list"
                    <?php if (in_array(\Yii::$app->controller->id, ['user-result'])) { ?> style="display: block;" <?php } ?>
                >
                    <li <?php if (\Yii::$app->controller->id == 'user-result'){ ?>class="active"<?php } ?>>
                        <a href="<?php echo \yii\helpers\Url::to(['user-result/index']) ?>">
                            <span></span>用户赢亏益记录
                        </a>
                    </li>
                </ul>
            </li>
            <li <?php if (in_array(\Yii::$app->controller->id, ['user'])) { ?> class="active" <?php } ?>>
                <a href="#">
                    <span class="iconfont icon-neirong"></span>用户
                </a>
                <ul class="__nav-list"
                    <?php if (in_array(\Yii::$app->controller->id, ['user'])) { ?> style="display: block;" <?php } ?>
                >
                    <li <?php if (\Yii::$app->controller->id == 'user'){ ?>class="active"<?php } ?>>
                        <a href="<?php echo \yii\helpers\Url::to(['user/index']) ?>">
                            <span></span>用户列表
                        </a>
                    </li>
                </ul>
            </li>
            <li <?php if (in_array(\Yii::$app->controller->id, ['apply'])) { ?> class="active" <?php } ?>>
                <a href="#">
                    <span class="iconfont icon-neirong"></span>充值提现申请
                </a>
                <ul class="__nav-list"
                    <?php if (in_array(\Yii::$app->controller->id, ['apply','setting'])) { ?> style="display: block;" <?php } ?>
                >
                    <li <?php if (\Yii::$app->controller->id == 'apply'){ ?>class="active"<?php } ?>>
                        <a href="<?php echo \yii\helpers\Url::to(['apply/index']) ?>">
                            <span></span>充值提现申请
                        </a>
                    </li>
                    <li <?php if (\Yii::$app->controller->id == 'setting'){ ?>class="active"<?php } ?>>
                        <a href="<?php echo \yii\helpers\Url::to(['setting/index']) ?>">
                            <span></span>账户设置
                        </a>
                    </li>
                </ul>
            </li>
            <li <?php if (in_array(\Yii::$app->controller->id, ['order'])) { ?> class="active" <?php } ?>>
                <a href="#">
                    <span class="iconfont icon-neirong"></span>交易记录
                </a>
                <ul class="__nav-list"
                    <?php if (in_array(\Yii::$app->controller->id, ['order'])) { ?> style="display: block;" <?php } ?>
                >
                    <li <?php if (\Yii::$app->controller->id == 'order'){ ?>class="active"<?php } ?>>
                        <a href="<?php echo \yii\helpers\Url::to(['order/index']) ?>">
                            <span></span>交易记录
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</div>
<div class="g-content"><?= $content ?></div>
<?php $this->endBody() ?>
</body>
<!--修改密码-->
<script type="text/j-template" id="main_edit_pwd_tpl">
    <div class="l-p-20 g-form g-no-border">
        <form class="_content" id="main_edit_pwd">
            <div class="__liner">
                <label>
                    原密码：
                </label>

                <div>
                    <input class="small" placeholder="请输入原密码" type="password" name="oldPwd" value="">
                </div>
            </div>
            <div class="__liner">
                <label>
                    新密码：
                </label>

                <div>
                    <input class="small" placeholder="请输入新密码" type="password" name="newPwd" value="">
                </div>
            </div>
            <div class="__liner">
                <label>
                    确认密码：
                </label>

                <div>
                    <input class="small repwd" placeholder="请输入确认密码" type="password" value="">
                </div>
            </div>
        </form>
    </div>
</script>
</html>
<?php $this->endPage() ?>
