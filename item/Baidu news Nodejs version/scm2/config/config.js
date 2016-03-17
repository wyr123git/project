//这个是读取配置文件的文件  

var config = null;//初始值

if (process && process.env && process.env.NODE_ENV) {//读取环境变量，执行第一步看环境变量是否存在。要读取环境变量，看是否有node提供的一个全局变量process。process下的专门存放环境变量的成员是env
	config = require('./env' + process.env.NODE_ENV + '.js');
}else{
	config = require('./env/development.js');//如果没有的话就直接把开发环境的配置文件引入进来。

}
module.exports = config;//导出config文件
