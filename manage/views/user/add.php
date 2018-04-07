
<div class="_page">
    <form>
        <input type="hidden" name="user_id" value="<?php echo Yii::$app->request->get('user_id')?>">
        <div class="g-form g-no-border">
            <div class="_content">
                <div class="__line">
                    <label>上级:</label>
                    <div>
                        <select name="pid">
                            <?php foreach ($user as $v){?>
                                <option value="<?php echo $v['user_id']?>" name="pid"<?php if($data['pid']==$v['user_id']){?>selected <?php }?> ><?php echo $v['name']?></option>
                            <?php } ?>
                        </select>
                    </div>
                </div>
                <div class="__line">
                    <label>账号:</label>
                    <div>
                        <input type="text" placeholder="请输入" name="name"
                               value="<?php echo isset($data['name'])?$data['name']:"";?>"/>
                    </div>
                </div>
                <div class="__line">
                    <label>密码:</label>
                    <div>
                        <input type="text" placeholder="请输入" name="password"
                               value=""/>
                    </div>
                </div>
            </div>
        </div>
        <div class="g-btns g-w-5">
            <button type="button" data-url="add" class="g-btn-blue js-main-save">保存</button>
        </div>
    </form>
</div>
