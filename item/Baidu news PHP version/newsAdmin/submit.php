<?php
	header("Content-type: text/html; charset=utf-8");
	require_once 'function.php';

	//修改用户数据的php文件
	if (empty($_POST['id'])) {
		die('id is empty');
	}

	if (empty($_POST['title'])) {
		die('title is empty');
	}

	if (empty($_POST['img'])) {
		die('age is empty');
	}

	if (empty($_POST['col_id'])) {
		die('col_id is empty');
	}

	if (empty($_POST['tag_id'])) {
		die('tag_id is empty');
	}

	$id = intval($_POST['id']);
	$title = $_POST['title'];
	$img = $_POST['img'];
	$colId = $_POST['col_id'];
	$tagId = $_POST['tag_id'];

	connectDb();
		mysql_query("set names 'utf8' ");
	    mysql_query("set character_set_client=utf8");
	    mysql_query("set character_set_results=utf8");
	mysql_query("UPDATE t_new SET title='$title', img='$img', col_id='$colId', tag_id='$tagId' WHERE id = $id");

	if (mysql_errno()) {
		echo mysql_error();
	}else{
		header("Location:index.php");
	}

?>