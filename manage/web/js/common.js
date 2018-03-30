;(function($, d, w){
    /**
     * 设置页面title
     */
    $.setTitle = function (t) {
        document.title = t;
    };
    /*
    *   自适应效果
    *   显隐侧边栏
    *   初始化load
    *   resize
    * */
    $(document).on('click','.js-toggle-sidebar',function(){
        $(this).parents('.g-sidebar').toggleClass('min');
    });
    $(window).load(function() {
        $('.g-scroll-list').height(window.innerHeight - 153 - 68);
        $.setTitle($('.g-topbar').text())
    }).resize(function(){
        if($(document.body).width() > 1280){
            $('.g-sidebar').removeClass('min')
        }else{
            $('.g-sidebar').addClass('min');
        }
        $('.g-scroll-list').height(window.innerHeight - 153 - 68);
    });
    // 公共事件
    $(document).on('click','.js-edit-admin',function(event){
        event.stopPropagation();
        $('._dropdown-menu').stop().toggle();
    }).on('click','._dropdown-menu li',function(event){
        event.stopPropagation();
        $('._dropdown-menu').stop().hide();
    }).on('mouseleave','._dropdown-menu, .js-edit-admin',function(){
        // $('._dropdown-menu').fadeOut();
    }).on('click',function(event){
        $('._dropdown-menu').stop().hide();
    });
    $.fn.scrollUnique = function() {
        return $(this).each(function() {
            var eventType = 'mousewheel';
            // 火狐是DOMMouseScroll事件
            if (document.mozHidden !== undefined) {
                eventType = 'DOMMouseScroll';
            }
            $(this).on(eventType, function(event) {
                // 一些数据
                var scrollTop = this.scrollTop,
                    scrollHeight = this.scrollHeight,
                    height = this.clientHeight;

                var delta = (event.originalEvent.wheelDelta) ? event.originalEvent.wheelDelta : -(event.originalEvent.detail || 0);        

                if ((delta > 0 && scrollTop <= delta) || (delta < 0 && scrollHeight - height - scrollTop <= -1 * delta)) {
                    // IE浏览器下滚动会跨越边界直接影响父级滚动，因此，临界时候手动边界滚动定位
                    this.scrollTop = delta > 0? 0: scrollHeight;
                    // 向上滚 || 向下滚
                    event.preventDefault(); 
                }        
            });
        }); 
    };
    /**
     * 下拉三级菜单
     */
    $(document).on('click','.js-sider-toggle>li>a',function(){
        var $el = $('.g-sidebar'),
            $navli = $(this).parent('li'),
            $subnav = $navli.find('.__nav-list');
        if($navli.hasClass('active')){
            $navli.stop().removeClass('active');
            $subnav.stop().slideUp('fast');
        }else{
            $el.find('.__nav-list').slideUp('fast');
            $el.find('._nav-list>li').removeClass('active');
            $subnav.stop().slideDown('fast');
            $navli.stop().addClass('active');
        }
    });
    
    /*
    * 退出登录
    * */
    $(document).on('click','.js-main-exit',function(){
        layer.confirm(
            '确认要退出吗？',
            function (index) {
                $.ajax({
                    url: "/login/log-out",
                    type: "post",
                    success: function (json) {
                        var res = JSON.parse(json);
                        if(res.status){
                            location.href = '/login/index'
                        }else{
                            layer.msg(res.msg, {icon: 5,time:1000});
                        }
                    },
                    error: function (res) {
                        layer.alert('服务器繁忙，请稍后重试', {icon: 5});
                    }
                })
            }
        )
    });

    /**
     * 公共操作
     *
     */
    $(document).on('click', '.js-main-del', function(){
        var url = $(this).data('url');
        var id = $(this).data('id');
        layer.confirm(
            '确认要删除吗？',
            function (index) {
                $.ajax({
                    url: url,
                    type: "get",
                    data:{
                        id: id
                    },
                    dataType:'json',
                    success: function (res) {
                        if(res.status){
                            location.reload();
                        }else{
                            layer.msg(res.msg, {icon: 5,time:1000});
                        }
                    },
                    error: function (res) {
                        layer.alert('服务器繁忙，请稍后重试', {icon: 5});
                    }
                })
            }
        )
    }).on('click', '.js-main-save', function(){
        var arr = $('form').serializeArray();
        var postData = {};
        for (var i = 0;i<arr.length;i++) {
            if(postData[arr[i].name]){
                postData[arr[i].name] = postData[arr[i].name] + ',' + arr[i].value;
            }else{
                postData[arr[i].name] = arr[i].value;
            }
        }
        console.log(postData);
        $.ajax({
            url:$(this).data('url'),
            type:'post',
            data:postData,
            dataType:'json',
            success:function(res){
                if(res.status){
                    layer.msg('保存成功', {icon:1, time:500}, function(){
                        window.history.go(-1);
                    });
                }else{
                    layer.msg(res.msg, {icon:5, time:1000});
                }
            },
            error:function(){
                layer.msg("网络不稳定，请稍后重试...", {icon:5, time:1000});
            }
        })
    });
    //年选择器
    laydate.render({ 
      elem: '.year',
      type: 'year'
    });
     
    //年月选择器
    laydate.render({ 
      elem: '.month',
      type: 'month'
    });
     
    //日期选择器
    laydate.render({ 
      elem: '.data',
      type: 'date' //默认，可不填
    });
     
    //时间选择器
    laydate.render({ 
      elem: '.time',
      type: 'time'
    });
     
    //日期时间选择器
    laydate.render({ 
      elem: '.datetime',
      type: 'datetime'
    });
})(jQuery, document, window);