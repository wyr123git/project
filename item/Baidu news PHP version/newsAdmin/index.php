<?php
    header("Content-type: text/html; charset=utf-8");
    require_once "function.php";
?>
<!DOCTYPE html>
<html lang="en">

<head>           
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>后台管理</title>
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/manage.css">
</head>

<body>
    <!-- 大的容器start -->
    <div class="container-fluid">
        <!-- 顶部start -->
        <div class="top">
            <div class="welcom">欢迎登陆后台新闻管理系统</div>
            <div class="first">管理</div>
            <div class="second">站点首页</div>
            <div class="three">后台首页</div>
            <div class="for">退出管理</div>
        </div>
        <!-- 顶部end -->
        <!-- 中间部分start -->
        <div class="article">
            <!-- 中间部分的右边start -->
            <div class="right">
                <button class="btn  btn-info" type="submit">
                    <a href="increase.html">添加新闻</a>
                </button>
                <div class="small-box">
                    <b>新闻管理>新闻列表</b>
                </div>
                <!-- php写的新闻内容 -->
                <?php
                    $conn = connectDb();
                    //数据库防止乱码
                    mysql_query("set names 'utf8' ");
                    mysql_query("set character_set_client=utf8");
                    mysql_query("set character_set_results=utf8");
                    //查询数据库中的每一条数据所反映出的所有结果
                    $result = mysql_query("SELECT A1.id,A1.title,A1.img,A1.create_time,A2.tag_name,A3.col_name FROM t_new A1 left join t_tag A2 on A1.tag_id=A2.id left join t_column A3 on A1.col_id=A3.id ORDER BY A1.id DESC");//查询t_new表，按照id降序排列
                    $dataCount = mysql_num_rows($result);//查询结果的条数
                ?>    
                <!-- 表格srart -->
                <table class="table table-striped  table-bordered table-hover table-responsive">
                    <thead>
                        <tr class="info">
                            <th>新闻标题</th>
                            <th>新闻图片</th>
                            <th>新闻栏目</th>
                            <th>新闻标签</th>
                            <th>新闻时间</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                    <?php
                        //写一个for循环，把每一条数据都读出来
                        for ($i=0; $i < $dataCount; $i++) {
                            $result_arr = mysql_fetch_assoc($result);
                            $id = $result_arr["id"];
                            $title = $result_arr["title"];
                            $img = $result_arr["img"];
                            $colName = $result_arr["col_name"];
                            $createTime = $result_arr["create_time"];
                            $tagName = $result_arr["tag_name"];
                            echo "<tr>"
                                ."<td class='td_title col-lg-2 col-md-2 col-sm-2'>$title</td>"
                                ."<td class='td_img col-lg-3 col-md-3 col-sm-3'>$img</td>"
                                ."<td class='td_col col-lg-1 col-md-1 col-sm-1'>$colName</td>"
                                ."<td class='td_tag col-lg-2 col-md-2 col-sm-2'>$tagName</td>"
                                ."<td class='td_cTime col-lg-2 col-md-2 col-sm-2'>$createTime</td>"
                                ."<td class='td_operate col-lg-2 col-md-2 col-sm-2'><a href='date.php?id=$id'>修改</a>|<a href='delete.php?id=$id'>删除</a></td>"
                                ."<tr>";
                        };
                    ?>
                    </tbody>
                </table>
                <!-- 表格end -->
            </div>
            <!-- 中间部分的右边end -->
        </div>
        <!-- 中间部分end -->
       <!--  <div class="footer">
       </div> -->
    </div>
    <!-- 大的容器end -->
</body>

</html>