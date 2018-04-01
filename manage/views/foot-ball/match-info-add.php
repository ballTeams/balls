
<div class="_page">
    <form>
        <div class="g-form g-no-border">
            <div class="_content">
                <div class="__line">
                    <label>波胆（如：全场波胆）:</label>
                    <div>
                        <input type="text" placeholder="请输入" name="title"
                               value="<?php echo isset($data['title'])?$data['title']:"";?>"/>
                    </div>
                </div>
                <div class="__line">
                    <label>比分:</label>
                    <div>
                        <input type="text" placeholder="请输入" name="title"
                               value="<?php echo isset($data['title'])?$data['title']:"";?>"/>
                    </div>
                </div>
                <div class="__line">
                    <label>收益率:</label>
                    <div>
                        <input type="text" placeholder="请输入" name="content"
                               value="<?php echo isset($data['content'])?$data['content']:"";?>"/>
                    </div>
                </div>
                <div class="__line">
                    <label>交易量:</label>
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
