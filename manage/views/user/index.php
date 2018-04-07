<div class="_page">
    <form class="g-form-search">
        <div class="_search-box">
            <input type="text" placeholder="请输入绑定手机号,昵称进行搜索" name="text" value="<?php echo Yii::$app->request->get('text')?>"/>
            <button class="js-search" type="submit">搜索</button>
            <div class="__btns">
                <a href="add">+新增</a>
            </div>
        </div>

    </form>
    <div class="g-table-main">
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>账号</th>
                <th>手机号</th>
                <th>真实姓名</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <?php

            foreach ($data as $k=>$v){?>
                <tr>
                    <td><?php echo $v['user_id']?></td>
                    <td><?php echo $v['name'] ?></td>
                    <td><?php echo $v['mobile']?></td>
                    <td><?php echo $v['real_name']?></td>
                    <td>
                        <div class="_btn-list" data-id="<?php echo $v['user_id']?>">
                                <span data-url="/user/del" data-id="<?php echo $v['user_id']?>" class="js-main-del">删除</span>
                                <a href="add?user_id=<?php echo $v['user_id']?>">编辑</a>

                        </div>
                    </td>
                </tr>
            <?php }?>
            </tbody>
        </table>
    </div>
</div>