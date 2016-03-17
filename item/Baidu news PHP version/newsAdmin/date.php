<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>修改用户数据</title>
	<link rel="stylesheet" href="css/bootstrap.css">
	<link rel="stylesheet" href="css/amend.css">
</head>
<body>
<?php
require_once 'function.php';
//修改用户数据所执行的if语句
if (!empty($_GET['id'])) {
	
	connectDb();
	mysql_query("set names 'utf8' ");
    mysql_query("set character_set_client=utf8");
    mysql_query("set character_set_results=utf8");

	$id = intval($_GET['id']);

	$result = mysql_query("SELECT * FROM t_new WHERE id = $id");
	if (mysql_errno()) {
		die('can not connect db');
	}
	$arr = mysql_fetch_assoc($result);
}else{
	die('id not define');
}


?>
<div class="container">
    <!-- 标题start -->
    <div class="title">
        新闻管理系统
    </div>
    <!-- 标题end -->

    <!-- 盒子start -->
    <div class="box center-block">
	    <form action="submit.php" method="post" class="form_all">
	    	<table class="table">
	    		<tbody>
	    			<tr>
	    				<td>
	    					<label for="">新闻ID:
								<input type="text" name="id" value="<?php echo $arr['id']; ?>" class="input_all">
							</label>
						</td>
	    			</tr>
	    			<tr>
	    				<td>
	    					<label for="">新闻标题:
								<input type="text" name="title" value="<?php echo $arr['title']; ?>" class="input_all">
							</label>
						</td>
	    			</tr>
	    			<tr>
	    				<td>
	    					<label for="">新闻图片:
								<input type="text" name="img" value="<?php echo $arr['img']; ?>" class="input_all">
								<input type="file">	
							</label>
						</td>
	    			</tr>
	    			<tr>
	    				<td>
	    					<label for="">新闻栏目:
								<input type="radio" name="col_id" value="1">推荐
								<input type="radio" name="col_id" value="3">百家
								<input type="radio" name="col_id" value="2">本地
							</label>
						</td>
	    			</tr>
	    			<tr>
	    				<td>
	    					<label for="">新闻标签:
								<input type="radio" name="tag_id" value="2">搜狐头条
								<input type="radio" name="tag_id" value="3">搜狐要闻
								<input type="radio" name="tag_id" value="4">网易要闻
								<input type="radio" name="tag_id" value="5">腾讯要闻
								<input type="radio" name="tag_id" value="6">
							</label>
						</td>
	    			</tr>
	    			<tr>
	    				<td>
	    					<input type="submit" value="提交" class="btn">
						</td>
	    			</tr>
				</tbody>
			</table>
		</form>
    </div>
    <!-- 盒子end -->
</div>
</body>
</html>