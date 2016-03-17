
/*tab切换点击事件start*/
var timeoutid;
$(document).ready(function(){
	$("#tab_ul li").each(function(i){
		var liNode = $(this);
		liNode.click(function(){
			timeoutid = setTimeout(function(){
				$(".tab").removeClass("tab");
				liNode.addClass("tab");
				$(".first").removeClass("first");
				$(".content").eq(i).addClass("first");
			},300);
		});
	});
});
/*tab切换end*/