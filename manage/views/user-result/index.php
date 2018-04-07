<div class="_page">
    <form class="g-form-search">
        <div class="_search-box">
            <input type="text" placeholder="请输入绑定手机号,昵称进行搜索" name="text" value="<?php echo Yii::$app->request->get('text')?>"/>
            <button class="js-search" type="submit">搜索</button>
        </div>
    </form>
    <div class="g-table-main">
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>用户</th>
                <th>盈亏</th>
                <th>详情</th>
            </tr>
            </thead>
            <tbody>
            <?php

            foreach ($data as $k=>$v){?>
                <tr>
                    <td><?php echo $v['apply_record_id']?></td>
                    <td><?php echo $v['name']?></td>
                    <td><?php echo $v['change_money']?></td>
                    <td><?php echo $v['remark']?></td>
                </tr>
            <?php }?>
            </tbody>
        </table>
    </div>
</div>