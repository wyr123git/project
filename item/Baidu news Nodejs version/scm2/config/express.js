//这个是express的配置文件，相当于导出一个服务器的实例。其他地方只要require服务器的实例就行
var express = require('express');//引入express的这个模块
var path = require('path');
var bodyParser = require('body-parser');//这是一个中间件，解析出post的数据
var config = require('./config');
module.exports = function (){//执行这个函数会导出函数的返回值
	console.log('init express');//express的初始化
	var app = express();//express的实例

	app.use(bodyParser.json());//以bodyParser。json方法解析body中的数据

	app.use(express.static(path.join(__dirname, 'public')));
	require('../app/routes/news.server.routes')(app);

	//app.use(express.static(path.join(config.path, 'public')));
	//app.use(express.static('public'));

	app.use(function (req, res,next){//响应函数
		res.status(404);//响应的头部
		try{ //防止重复返回
			return res.json('Not Found');//响应的内容
		}catch(e){
			console.error('404 set header after sent');
		}
	});

	app.use(function(err,req,res,next){//有err的话抛出，统一处理错误
		if (!err) {return next()}
		res.status(500);
		try{
			return res.json(err.message || 'server error');//如果没有err错误信息的话，就打印出server error
		}catch(e){
			console.error('500 set header after sent');
		}
	});
	return app;
};

