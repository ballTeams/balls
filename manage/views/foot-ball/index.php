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
                <th>小标题</th>
                <th>大标题</th>
                <th>赛事时间</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <?php use common\extensions\GoLinkPager;

            foreach ($data as $k=>$v){?>
                <tr>
                    <td><?php echo $v['ball_match_id']?></td>
                    <td><?php echo $v['title']?></td>
                    <td><?php echo $v['content']?></td>
                    <td><?php echo $v['match_time']?></td>
                    <td>
                        <div class="_btn-list" data-id="<?php echo $v['ball_match_id']?>">
                            <a href="">添加</a>
                            <a href="">编辑</a>
                        </div>
                    </td>
                </tr>
            <?php }?>
            </tbody>
        </table>
    </div>
</div>
<script type="text/javascript" src="/js/app/member/index.js"></script>