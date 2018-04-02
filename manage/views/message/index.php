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
                <th>标题</th>
                <th>内容</th>
                <th>创建时间</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <?php

            foreach ($data as $k=>$v){?>
                <tr>
                    <td><?php echo $v['message_id']?></td>
                    <td><?php echo $v['title']?></td>
                    <td><?php echo $v['content']?></td>
                    <td><?php echo $v['create_time']?></td>
                    <td>
                        <div class="_btn-list" data-id="<?php echo $v['message_id']?>">
                            <span data-url="/message/del" data-id="<?php echo $v['message_id']?>" class="js-main-del">删除</span>
                            <a href="add?message_id=<?php echo $v['message_id']?>">编辑</a>
                        </div>
                    </td>
                </tr>
            <?php }?>
            </tbody>
        </table>
    </div>
</div>