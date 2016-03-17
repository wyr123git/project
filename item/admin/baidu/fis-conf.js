// 设置图片合并的最小间隔
fis.config.set('settings.spriter.csssprites.margin', 10);

// 取消下面的注释开启simple插件，注意需要先进行插件安装 npm install -g fis-postpackager-simple
fis.config.set('modules.postpackager', 'simple');

// 取消下面的注释设置打包规则
fis.config.set('pack', {
    '/pkg/lib.js': [
	    'js/admin.js',
	    'js/jquery-1.11.3.min.js',
    ],
// 取消下面的注释设置CSS打包规则，CSS打包的同时会进行图片合并
	'/pkg/aio.css': 'css/admin.css'
});
fis.config.set('project.charset', 'UTF-8');
//文件MD5戳长度
fis.config.set('project.md5Length', 8);

// 取消下面的注释可以开启simple对零散资源的自动合并
fis.config.set('settings.postpackager.simple.autoCombine', true);
