
<div class="_page">
    <form>
        <div class="g-form g-no-border">
            <div class="_content">
                <div class="__line">
                    <label>会员卡名称:</label>
                    <div>
                        <input type="text" placeholder="请输入" name="name" value=""/>
                    </div>
                </div>
                <div class="__line text">
                    <label>等级:</label>
                    <div>
                        <select name="high_level">
                            <option value="" name="high_level" >请选择等级</option>
                        </select>
                    </div>
                </div>
                <div class="__line text">
                    <label>可看剧种:</label>
                    <div>
                        <label><input type="checkbox" name="check" value="a"/>a</label>
                        <label><input type="checkbox" name="check" value="b"/>b</label>
                        <label><input type="checkbox" name="check" value="c"/>c</label>
                    </div>
                </div>
                <div class="__line text">
                    <label>可看剧种:</label>
                    <div>
                        <label><input type="radio" name="radio" value="a" />a</label>
                        <label><input type="radio" name="radio" value="b"/>b</label>
                        <label><input type="radio" name="radio" value="c"/>c</label>
                    </div>
                </div>
                <div class="__line">
                    <label>会员等级名称:</label>

                    <div>
                        <textarea name="teat"></textarea>
                    </div>
                </div>
                

            </div>
        </div>
        <div class="g-btns g-w-5">
            <button type="button" data-url="/save" class="g-btn-blue js-main-save">保存</button>
        </div>
    </form>
</div>
