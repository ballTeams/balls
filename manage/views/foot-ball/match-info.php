<div class="_page">
    <div class="g-f-clearfix">
        <input value="<?php echo Yii::$app->request->get('ball_match_id')?>" type="hidden" name="ball_match_id" />

        <div class="g-table-main">
            <h2 class="l-pb-10">全场波胆  <span class="l-pl-30 g-fs-16">手续费：</span><input name="charge" class="g-input size6" type="text" /></h2>
            <table class="js-table">
                <thead>
                <tr class="thead">
                    <th>选项</th>
                    <th>收益%</th>
                    <th>可交易量</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody class="js-tbody">
                    <tr>
                        <td><input class="g-input size6" type="text" name="one" /></td>
                        <td><input class="g-input size6" type="text" name="two" /></td>
                        <td><input class="g-input size6" type="text" name="three" /></td>
                        <td>
                        	<span class="js-del g-color-blue">删除</span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="js-add g-color-blue">+添加</div>
        </div>
        <div class="g-table-main"  style="box-sizing: border-box;">
            <h2 class="l-pb-10">上半场波胆  <span class="l-pl-30 g-fs-16">手续费：</span><input name="charge" class="g-input size6" type="text" /></h2>
            <table class="js-table">
                <thead>
                <tr class="thead">
                    <th>选项</th>
                    <th>收益%</th>
                    <th>可交易量</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody class="js-tbody">
                    <tr>
                        <td><input class="g-input size6" type="text" name="one" /></td>
                        <td><input class="g-input size6" type="text" name="two" /></td>
                        <td><input class="g-input size6" type="text" name="three" /></td>
                        <td>
                            <span class="js-del g-color-blue">删除</span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="js-add g-color-blue">+添加</div>
        </div>
        <div class="g-table-main" style="box-sizing: border-box;">
            <h2 class="l-pb-10">下半场波胆  <span class="l-pl-30 g-fs-16">手续费：</span><input name="charge" class="g-input size6" type="text" /></h2>
            <table class="js-table">
                <thead>
                <tr class="thead">
                    <th>选项</th>
                    <th>收益%</th>
                    <th>可交易量</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody class="js-tbody">
                    <tr>
                        <td><input class="g-input size6" type="text" name="one" /></td>
                        <td><input class="g-input size6" type="text" name="two" /></td>
                        <td><input class="g-input size6" type="text" name="three" /></td>
                        <td>
                            <span class="js-del g-color-blue">删除</span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="js-add g-color-blue">+添加</div>
        </div>
    </div>  
    <div class="js-save g-btn-blue" >保存</div>
</div>

<script type="text/j-template" id="table_tpl">
    <tr>
        <td><input class="g-input size6" type="text" name="one" /></td>
        <td><input class="g-input size6" type="text" name="two" /></td>
        <td><input class="g-input size6" type="text" name="three" /></td>
        <td>
            <span class="js-del g-color-blue">删除</span>
        </td>
    </tr>
</script>
<script type="text/javascript" src="/js/app/site-table2.js?v=12"></script>