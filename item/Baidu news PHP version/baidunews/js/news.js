
var colId = 1;
/*加载ajax*/
$(document).ready(function(){
	ajaxGetData(colId);
});
//点击title里的文字切换tab
$(document).on("click",".ul_li li",function(){
	var nodeLi = $(this);
	$(".ul_li .active").removeClass("active");
	nodeLi.addClass("active");
	colId = nodeLi.attr("tagId");
	ajaxGetData(colId);
});

/*ajax函数*/
function ajaxGetData(colId){
	$.ajax({
		url:"data.php",
		type:"POST",
		data:{colId:colId},
		success:function(data){
			var str = '';
			for(i in data){
				str += '<div class="news_box">'
                    +	'<div class="news_img">'
                    +		'<img src="'+data[i].img+'" alt="" class="smallImg">'
                    +	'</div>'
                    +	'<div class="news_title">'
                    +		'<p>'+data[i].title+'</p>'
                    +	'</div>'
                    +	'<div class="news_time">'
                    +		data[i].createTime
                    +	'</div>'
                    +	'<div class="news_tag">'
                    +		data[i].tagName
                    +	'</div>'
                	+  '</div>';
			};

			$(".article_news").html(str);
		}
	});
}
