<?php
	//删除用户数据的php页面

	if (empty($_GET['id'])) {
		die('id is empty');
	}
	require_once "function.php";
	connectDb();
	$id = intval($_GET['id']);
	mysql_query("DELETE FROM t_new WHERE id = $id");
	if (mysql_errno()) {
		die("Fail to delete t_new with id $id");
	}else{
		header("Location:index.php");
	}

?>