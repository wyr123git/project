var orm = require('orm'); //引入orm模块
var config = require('../../config/config'); // 引入config模块
var model = require('../models/news.server.model');//引入models模块
var moment = require("moment");//引入moment模块

var NewsData = {};//新闻数据

orm.connect(config.mysql, function (err, db) {//连接数据库
  	if (err) throw err;//如果错误就抛出错误
 
	News = db.define("t_new", model.NewsModel);//数据库中的表格记录

	NewsData.select = function(paramData,req,res,next){//查找出数据中的值
	 	News.find(paramData,[ "create_time", "Z" ], function (err, data) {//百度前台的新闻在数据库中查找
        	if (err) throw err;
        	var tagname = '';
        	var colname = '';

        	for(i in data){//循环标签
        		if(data[i].tag_id == 2){
        			tagname = '搜狐头条';
        		}else if(data[i].tag_id == 3){
        			tagname = '搜狐要闻';
        		}else if(data[i].tag_id == 4){
        			tagname = '网易要闻';
        		}else if(data[i].tag_id == 5){
        			tagname = '腾讯要闻';
        		};

        		if(data[i].col_id == 1){//循坏栏目
        			colname = '推荐';
        		}else if(data[i].col_id == 2){
        			colname = '百家';
        		}else if(data[i].col_id == 3){
        			colname = '本地';
        		};

        		data[i].colName = colname;
        		data[i].tagName = tagname;
        		data[i].create_time = moment(new Date(data[i].create_time)).format("YYYY-MM-DD HH:mm:ss");//时间格式
        	};
        	if(paramData.col_id == null){
        		res.render('admin.ejs',{data:data});
        	}else{
        		res.json(data);
        	};
	    });
	};

	NewsData.selectById = function(paramData,req,res,next){//修改新闻的页面
	 	News.find(paramData, function (err, data) {
        	if (err) throw err;
        	res.render('edit.ejs',data[0]);
	    });
	};

	NewsData.del = function(paramData,req,res,next){//删除数据
		News.find(paramData).remove(function (err) {
		    if (err) throw err;
		    res.redirect('/admin');
		});
	};

	NewsData.save = function(paramData,req,res,next){//添加新闻
		News.create(paramData, function(err, results) {
			if (err) throw err;
			console.log(results.title);
			res.redirect('/admin');
		});
	};

	NewsData.edit = function(paramData,req,res,next){//修改数据
		var id = paramData.id;
		News.find({ id: id }, function (err, data) {
			if (err) throw err;

			data[0].title = paramData.title;
			data[0].img = paramData.img;
			data[0].col_id = paramData.col_id;
			data[0].tag_id = paramData.tag_id;
			data[0].create_time = new Date();

	        data[0].save(function (err) {
	        	if (err) throw err;
	        	res.redirect('/admin');
	        });
	    });
	};




});

module.exports = NewsData;