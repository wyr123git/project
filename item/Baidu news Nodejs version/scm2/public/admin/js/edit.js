//修改的时候每次循环到栏目和标签的id
$(document).ready(function(){

	$(".newsColumn").each(function(){
		var $thisNode = $(this);
		var $thisColId = $("#thisColId").val();
		if($thisNode.val() == $thisColId){
			$thisNode.prop("checked",true);
		};
	});

	$(".newsTag").each(function(){
		var $thisNode = $(this);
		var $thisTagId = $("#thisTagId").val();
		if($thisNode.val() == $thisTagId){
			$thisNode.prop("checked",true);
		};
	});
});