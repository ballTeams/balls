<div class="_page">
    <form class="g-form-search">
        <div class="_search-box">
            <input type="text" placeholder="请输入绑定手机号,昵称进行搜索" name="text" value="<?php echo Yii::$app->request->get('text')?>"/>
            <button class="js-search" type="submit">搜索</button>
            <div class="__btns">
                <a href="match-info-add">+新增</a>
            </div>
        </div>
    </form>
    <div class="g-table-main">
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>波胆类别</th>
                <th>比分</th>
                <th>收益率</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <?php

            foreach ($data as $k=>$v){?>
                <tr>
                    <td><?php echo $v['ball_match_id']?></td>
                    <td><?php echo $v['type_name']?></td>
                    <td><?php echo $v['content']?></td>
                    <td><?php echo $v['charge']?>%</td>
                    <td>
                        <div class="_btn-list" data-id="<?php echo $v['ball_match_id']?>">
                            <a href="match-info-add?ball_match_id=<?php echo $v['ball_match_id']?>">编辑</a>
                        </div>
                    </td>
                </tr>
            <?php }?>
            </tbody>
        </table>
    </div>
</div>