({
	run:function(){
		this.init().listen();
	},
	init:function(){
		return this;
	},
	listen:function(){
		var _this = this;
		$(document).on('click', '.js-del', function(){
			$(this).parents('tr').remove();
		})
		$(document).on('click', '.js-add', function(){
			$(this).prev('table').find('tbody').append(doT.template($('#table_tpl').text())())
		})
		$(document).on('click', '.js-save', function(){
			var obj = {
				0: {
					charge: $('.g-table-main').eq(0).find('input[name=charge]').val(),
					list: []
				},
				1: {
					charge: $('.g-table-main').eq(1).find('input[name=charge]').val(),
					list: []
				},
				2: {
					charge: $('.g-table-main').eq(2).find('input[name=charge]').val(),
					list: []
				},
				ball_match_id: $('input[name=ball_match_id]').val()
			};
			for(var i = 0; i < $('.js-table').length; i++){
				$('.js-table').eq(i).find('tr:not(.thead)').map(function(index, item){
					obj[i].list.push({
						name: $(item).find('input[name=one]').val(),
						money: $(item).find('input[name=two]').val(),
						num: $(item).find('input[name=three]').val(),
					})
				})
			}
			console.log(obj);
			$.ajax({
	            url:'/z',
	            type:'post',
	            data:obj,
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
		})
	}
}).run();