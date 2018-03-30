
<div class="_page">
    <form>
        <div class="g-form g-no-border">
            <div class="_content">
                <div class="__line">
                    <label>小标题:</label>
                    <div>
                        <input type="text" placeholder="请输入" name="titel"
                               value="<?php echo isset($data['title'])?$data['title']:"";?>"/>
                    </div>
                </div>
                <div class="__line">
                    <label>大标题:</label>
                    <div>
                        <input type="text" placeholder="请输入" name="content"
                               value="<?php echo isset($data['content'])?$data['content']:"";?>"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="g-btns g-w-5">
            <button type="button" data-url="/save" class="g-btn-blue js-main-save">保存</button>
        </div>
    </form>
</div>
