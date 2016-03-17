/*
Navicat MySQL Data Transfer

Source Server         : news
Source Server Version : 50611
Source Host           : localhost:3306
Source Database       : news

Target Server Type    : MYSQL
Target Server Version : 50611
File Encoding         : 65001

Date: 2016-01-13 16:36:54
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_column
-- ----------------------------
DROP TABLE IF EXISTS `t_column`;
CREATE TABLE `t_column` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `col_name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='新闻栏目表';

-- ----------------------------
-- Records of t_column
-- ----------------------------
INSERT INTO `t_column` VALUES ('1', '推荐');
INSERT INTO `t_column` VALUES ('2', '百家');
INSERT INTO `t_column` VALUES ('3', '本地');

-- ----------------------------
-- Table structure for t_new
-- ----------------------------
DROP TABLE IF EXISTS `t_new`;
CREATE TABLE `t_new` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `img` varchar(200) NOT NULL,
  `col_id` int(11) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `tag_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8 COMMENT='新闻表';

-- ----------------------------
-- Records of t_new
-- ----------------------------
INSERT INTO `t_new` VALUES ('1', '大批中国学生抗议泰国一航空欺诈 吁驻泰大使馆介入', 'http://t12.baidu.com/it/u=http://r3.sinaimg.cn/10230/2016/0111/a0/e/40570371/auto.jpg&fm=36', '1', '2016-01-11 20:11:46', '2');
INSERT INTO `t_new` VALUES ('2', '泰国曼谷机场候机大厅内出现眼镜蛇 吓坏乘客', 'http://t12.baidu.com/it/u=http://r3.sinaimg.cn/10230/2016/0111/a0/e/40570371/auto.jpg&fm=36', '1', '2016-01-11 22:25:05', '3');
INSERT INTO `t_new` VALUES ('3', '习近平从严治党语录：家庭重大变故要报告', 'http://d.hiphotos.baidu.com/news/q%3D100/sign=1d9ae5108094a4c20c23e32b3ef41bac/cefc1e178a82b9018182c72c748da9773912ef86.jpg', '2', '2016-01-12 18:03:31', '2');
INSERT INTO `t_new` VALUES ('4', '吴亦凡伦敦走秀领场谢幕 大长腿帅得太犯规！', 'http://upload.trends.com.cn/2016/0112/1452570913504.jpg', '2', '2016-01-12 18:06:13', '3');
INSERT INTO `t_new` VALUES ('6', '就算没有黄宗泽 胡杏儿也是童话里最美的公主', 'http://img7.aili.com/201601/12/1452568240_90317500.jpg', '1', '2016-01-12 18:07:41', '2');
INSERT INTO `t_new` VALUES ('8', '土耳其伊斯坦布尔著名景点发生爆炸致死伤', 'http://t1.baidu.com/it/u=http%3A%2F%2Fpic.yangtse.com%2Fd%2Ffile%2Fphoto%2Fqutu%2F2016%2F01%2F12%2F5890f8d80c98120b431e75f0d0c0102b.jpg&fm=30', '3', '2016-01-12 18:10:38', '4');
INSERT INTO `t_new` VALUES ('19', '百度为什么要卖贴吧', 'http://e.hiphotos.baidu.com/news/q%3D100/sign=a44cf2f6a0efce1bec2bccca9f50f3e8/7e3e6709c93d70cf0f641b0dffdcd100baa12b17.jpg', '3', '2016-01-13 12:36:20', '5');
INSERT INTO `t_new` VALUES ('20', '艺术家怎样使用机器学习？', 'http://h.hiphotos.baidu.com/news/w%3D638/sign=b2eb3e04900a304e5222a3f9e9c9a7c3/7c1ed21b0ef41bd5e29aa2f456da81cb38db3de0.jpg', '3', '2016-01-13 12:37:27', '2');
INSERT INTO `t_new` VALUES ('21', '营底特律 汽车业集体反击了科技巨头', 'http://g.hiphotos.baidu.com/news/w%3D638/sign=e84cd6e3fa1f4134e037067d1d1f95c1/8694a4c27d1ed21b40a665e5aa6eddc451da3f46.jpg', '1', '2016-01-13 12:40:52', '4');
INSERT INTO `t_new` VALUES ('22', '安全产品不安全 杀毒软件为网络攻击打开方便之门', 'http://d.hiphotos.baidu.com/news/w%3D638/sign=618c3d266a224f4a5799701031f69044/023b5bb5c9ea15cee5a4ab09b1003af33a87b26c.jpg', '1', '2016-01-13 12:41:39', '3');
INSERT INTO `t_new` VALUES ('28', '民资宽带可依靠资本运作获得机会', 'http://d.hiphotos.baidu.com/news/q=100/sign=f076fb16c8fc1e17fbbf88317a91f67c/09fa513d269759ee8eb22ccbb5fb43166c22dfd4.jpg', '2', '2016-01-13 15:06:10', '3');
INSERT INTO `t_new` VALUES ('29', '奥巴马国情咨文：美是地球上最强大国家 说美国变弱是吹牛', 'http://himg2.huanqiu.com/attachment2010/2016/0113/10/19/20160113101920577.jpg', '2', '2016-01-13 15:09:04', '5');
INSERT INTO `t_new` VALUES ('30', '国际油价逼近30美元 国内油价或继续暂缓调整', 'http://upload.cankaoxiaoxi.com/2016/0113/1452639841556.jpg', '3', '2016-01-13 15:11:56', '5');
INSERT INTO `t_new` VALUES ('31', '深圳通报滑坡事故处置情况：6名涉案嫌疑人在逃', 'http://upload.cankaoxiaoxi.com/2015/1221/1450656116830.jpg', '3', '2016-01-13 15:12:56', '4');
INSERT INTO `t_new` VALUES ('32', '土耳其警方在广场爆炸后逮捕59名疑似IS人员(图)', 'http://p2.cri.cn/M00/23/B7/CqgNOlaVvtiAIDQwAAAAAAAAAAA711.550x288.jpg', '3', '2016-01-13 15:13:46', '5');
INSERT INTO `t_new` VALUES ('33', '所谓的诺基亚新机只是功能机，回归恐将赶个晚集', 'http://a.hiphotos.baidu.com/news/crop%3D0%2C51%2C1128%2C677%3Bw%3D638/sign=2f9de0528235e5dd8463ff9f4bf68bda/9825bc315c6034a83e80b881cc1349540923764b.jpg', '1', '2016-01-13 15:17:48', '3');
INSERT INTO `t_new` VALUES ('34', '两年之后，AT&T为什么再推不限流量套餐  王峰and', 'http://g.hiphotos.baidu.com/news/crop%3D52%2C1%2C510%2C306%3Bw%3D638/sign=457700c0f036afc31a4365258e2cd9e8/f9dcd100baa1cd1134b33f20be12c8fcc3ce2dac.jpg', '3', '2016-01-13 15:18:26', '5');
INSERT INTO `t_new` VALUES ('35', '捕蜂奇人20年端掉千个马蜂窝 蜂巢蛹一年卖5万', 'http://d.youth.cn/shrgch/201601/W020160113255821856243.jpg', '2', '2016-01-13 15:27:05', '4');

-- ----------------------------
-- Table structure for t_tag
-- ----------------------------
DROP TABLE IF EXISTS `t_tag`;
CREATE TABLE `t_tag` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tag_name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COMMENT='标签表';

-- ----------------------------
-- Records of t_tag
-- ----------------------------
INSERT INTO `t_tag` VALUES ('2', '搜狐头条');
INSERT INTO `t_tag` VALUES ('3', '搜狐要闻');
INSERT INTO `t_tag` VALUES ('4', '网易要闻');
INSERT INTO `t_tag` VALUES ('5', '腾讯要闻');
INSERT INTO `t_tag` VALUES ('6', '');
INSERT INTO `t_tag` VALUES ('7', '');
