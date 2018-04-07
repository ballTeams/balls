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
                <th>赛事名称</th>
                <th>场次</th>
                <th>购买比分</th>
                <th>交易金额</th>
                <th>用户</th>
                <th>交易时间</th>
            </tr>
            </thead>
            <tbody>
            <?php

            foreach ($data as $k=>$v){?>
                <tr>
                    <td><?php echo $v['order_id']?></td>
                    <td><?php echo '['.$v['title'].']'.$v['content']?></td>
                    <td><?php echo $v['info_type'] ?></td>
                    <td><?php echo $v['buy_result']?></td>
                    <td><?php echo $v['buy_money']?></td>
                    <td><?php echo $v['user_name']?></td>
                    <td><?php echo $v['create_time']?></td>
                </tr>
            <?php }?>
            </tbody>
        </table>
    </div>
</div>