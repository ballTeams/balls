
<div class="_page">
    <form>
        <input type="hidden" name="message_id" value="<?php echo Yii::$app->request->get('message_id')?>">
        <div class="g-form g-no-border">
            <div class="_content">
                <div class="__line">
                    <label>标题:</label>
                    <div>
                        <input type="text" placeholder="请输入" name="title"
                               value="<?php echo isset($data['title'])?$data['title']:"";?>"/>
                    </div>
                </div>
                <div class="__line">
                    <label>内容:</label>
                    <div>
                        <input type="text" placeholder="请输入" name="content"
                               value="<?php echo isset($data['content'])?$data['content']:"";?>"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="g-btns g-w-5">
            <button type="button" data-url="add" class="g-btn-blue js-main-save">保存</button>
        </div>
    </form>
</div>
