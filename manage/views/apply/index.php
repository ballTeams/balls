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
                <th>用户账号</th>
                <th>申请金额</th>
                <th>类型</th>
                <th>申请时间</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <?php

            foreach ($data as $k=>$v){?>
                <tr>
                    <td><?php echo $v['apply_id']?></td>
                    <td><?php echo $v['name'] ?></td>
                    <td><?php echo $v['apply_amount']?></td>
                    <td><?php echo $v['type_text']?></td>
                    <td><?php echo $v['create_time']?></td>
                    <td> <div class="_btn-list" data-id="<?php echo $v['apply_id']?>">
                            <?php if($v['status']==1){?>
                                <a href="#">已通过</a>
                            <?php }else{?>
                                <span data-url="/apply/agree" data-id="<?php echo $v['apply_id']?>" class="js-main-del">同意申请</span>

                            <?php }?>

                        </div>
                    </td>
                </tr>
            <?php }?>
            </tbody>
        </table>
    </div>
</div>