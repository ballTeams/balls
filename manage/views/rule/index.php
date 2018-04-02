
<div class="_page">
    <form>
        <input type="hidden" name="rule_id" value="<?php echo isset($data['rule_id'])?$data['rule_id']:"";?>">
        <div class="g-form g-no-border">
            <div class="_content">
                <div class="__line">
                    <label>标题:</label>
                    <div>
                        <textarea name="content"><?php echo isset($data['content'])?$data['content']:"";?></textarea>
                    </div>
                </div>
            </div>
        </div>
        <div class="g-btns g-w-5">
            <button type="button" data-url="index" class="g-btn-blue js-main-save">保存</button>
        </div>
    </form>
</div>
