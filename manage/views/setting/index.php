
<div class="_page">
    <form>
        <div class="g-form g-no-border">
            <div class="_content">
                <div class="__line">
                    <label>银行名称:</label>
                    <div>
                        <input type="text" placeholder="请输入" name="bank_name"
                               value="<?php echo isset($data['bank_name'])?$data['bank_name']:"";?>"/>
                    </div>
                </div>
                <div class="__line">
                    <label>银行卡号:</label>
                    <div>
                        <input type="text" placeholder="请输入" name="bank_number"
                               value="<?php echo isset($data['bank_number'])?$data['bank_number']:"";?>"/>
                    </div>
                </div>
                <div class="__line">
                    <label>收款人:</label>
                    <div>
                        <input type="text" placeholder="请输入" name="bank_person_name"
                               value="<?php echo isset($data['bank_person_name'])?$data['bank_person_name']:"";?>"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="g-btns g-w-5">
            <button type="button" data-url="index" class="g-btn-blue js-main-save">保存</button>
        </div>
    </form>
</div>
