/*
	用的单例模式初始化，这样改写的好处是：
	减少代码冗余，减少内存消耗
*/

$(document).ready(function(){

	var index = {
		//初始化函数
		init:function(argument){
			//缓存对象
			var me = this;
			me.render();
			me.bind();
		},
		//DOM元素获取
		render:function(){
			var me = this;
			me.li = $('#tab_ul li');
		},
		//DOM元素绑定
		bind:function(){
			var me = this;
			//循环给导航li绑定click事件
			me.li.each(function(i){
				var liNode = $(this);
				liNode.click(function(){
					setTimeout(function(){
						$(".tab").removeClass("tab");
						liNode.addClass("tab");
						$(".first").removeClass("first");
						$(".content").eq(i).addClass("first");
					},300);
				});
			});
		}
	};

	index.init();//初始化
});