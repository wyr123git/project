<?php
    
    header("Content-type: text/json; charset=utf-8");
    //检查colId是否传递过来
    if (!isset($_POST['colId'])){
		die('colId not define');
	}

	$colId = $_POST['colId'];

	require_once 'function.php';
    $conn = connectDb();//获取数据库连接
    mysql_query("set names 'utf8' ");
    mysql_query("set character_set_client=utf8");
    mysql_query("set character_set_results=utf8");

    $result = mysql_query("SELECT A1.id,A1.title,A1.img,A1.create_time,A1.col_id,A2.tag_name FROM t_new A1 left join t_tag A2 on A1.tag_id=A2.id WHERE A1.col_id=$colId ORDER BY A1.id DESC");//查询t_new表，按照id降序排列
    $dataCount = mysql_num_rows($result);//得到新闻总数
    $array = array();
    //for循环，把每一条数据都读出来
    for ($i=0; $i <$dataCount; $i++) {
    	$arr = array();

        $result_arr = mysql_fetch_assoc($result);
        $id = $result_arr["id"];
        $title = $result_arr["title"];
        $img = $result_arr["img"];
        $createTime = $result_arr["create_time"];
        $tagName = $result_arr["tag_name"];

        $arr["id"] = $id;
        $arr["title"] = $title;
        $arr["img"] = $img;
        $arr["createTime"] = $createTime;
        $arr["tagName"] = $tagName;

        $array[] = $arr;
    };
    echo json_encode($array);
?>