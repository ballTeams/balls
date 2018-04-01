
<div class="_page">
    <form>
        <input type="hidden" name="match_result_id" value="<?php echo Yii::$app->request->get('match_result_id')?>">
        <div class="g-form g-no-border">
            <div class="_content">
                <div class="__line">
                <label>等级:</label>
                    <div>
                        <select name="ball_match_id">
                            <?php foreach ($ball_match as $v){?>
                            <option value="<?php echo $v['ball_match_id']?>" name="ball_match_id" ><?php echo '['.$v['title'].']'.$v['content']?></option>
                            <?php } ?>
                        </select>
                    </div>
                </div>
                <div class="__line">
                    <label>全场波胆:</label>
                    <div>
                        <input type="text" placeholder="请输入" name="all"
                               value="<?php echo isset($data['all'])?$data['all']:"";?>"/>
                    </div>
                </div>
                <div class="__line">
                    <label>上半场波胆:</label>
                    <div>
                        <input type="text" placeholder="请输入" name="up"
                               value="<?php echo isset($data['up'])?$data['up']:"";?>"/>
                    </div>
                </div>
                <div class="__line">
                    <label>总进球数:</label>
                    <div>
                        <input type="text" placeholder="请输入" name="total_ball"
                               value="<?php echo isset($data['total_ball'])?$data['total_ball']:"";?>"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="g-btns g-w-5">
            <button type="button" data-url="add" class="g-btn-blue js-main-save">保存</button>
        </div>
    </form>
</div>
