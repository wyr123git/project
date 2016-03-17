<?php
	//增加新闻数据的php页面

	header("Content-type: text/html; charset=utf-8");
	if (!isset($_POST['title'])){
		die('t_new title not define');
	}
	if (!isset($_POST['img'])){
		die('t_new img not define');
	}
	if (!isset($_POST['col_id'])){
		die('t_new col_id not define');
	}
	if (!isset($_POST['tag_id'])){
		die('t_new tag_id not define');
	}
	$title = $_POST['title'];
	if (empty($title)) {
		die('t_new title is empty');
	}

	$img = $_POST['img'];
	if (empty($img)) {
		die('t_new img is empty');
	}
	$colId = $_POST['col_id'];
	if (empty($colId)) {
		die('t_new col_id is empty');
	}

	$tagId = $_POST['tag_id'];
	if (empty($tagId)) {
		die('t_new tag_id is empty');
	}

	require_once 'function.php';
	connectDb();
		mysql_query("set names 'utf8' ");
	    mysql_query("set character_set_client=utf8");
	    mysql_query("set character_set_results=utf8");

	//插入的操作
	mysql_query("INSERT INTO t_new(title,img,col_id,tag_id) VALUES ('$title','$img','$colId','$tagId')");//
	if (mysql_errno()) {
		echo mysql_error();
	}else{
		header('Location:index.php');

	}
?>