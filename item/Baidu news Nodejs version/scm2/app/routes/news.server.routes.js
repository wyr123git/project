var orm = require('orm');//引入orm模块
var config = require('../../config/config');// 引入config模块
var model = require('../models/news.server.model');//引入models模块
var NewsData = require('../controllers/news.server.controller');//引入写的数据库记录

module.exports = function(app){//导出路由
	app.route('/').get(function(req,res,next){
		res.render('index.ejs');
	});

	//-------------
	app.route('/news/:colId').get(function (req,res,next){//百度前台的新闻路由
		var para = req.params.colId;
		if(para == 'add'){
			res.render('add.ejs');
		}else if(!isNaN(para)){
			NewsData.select({col_id:req.params.colId},req,res,next);
		};
	});
	app.route('/news/save').post(function (req,res,next){//添加新闻的路由
		NewsData.save(req.body,req,res,next);
	});
	app.route('/news/edit').post(function (req,res,next){//修改新闻的路由
		NewsData.edit(req.body,req,res,next);
	});

	app.route('/newsEditPage/:newsId').get(function (req,res,next){//修改新闻的页面路由
		NewsData.selectById({id:req.params.newsId},req,res,next);
	});

	//-----------
	app.route('/admin').get(function (req,res,next){//后台管理的路由
		NewsData.select({},req,res,next);
	});
	app.route('/admin/delete/:newsId').get(function (req,res,next){//后台管理删除的路由
		NewsData.del({id:req.params.newsId},req,res,next);
	});
};


