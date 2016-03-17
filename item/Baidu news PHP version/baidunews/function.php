<?php
	require_once 'config.php';
	//PHP和数据库之间的连接的函数
	function connectDb(){
		$conn = mysql_connect(MYSQL_HOST,MYSQL_USER,MYSQL_PW);
		if (!$conn) {
			die('Can not connet db');
		}
		mysql_select_db('news');
		return $conn;
	}

?>