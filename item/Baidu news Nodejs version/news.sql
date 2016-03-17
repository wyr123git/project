/*
Navicat MySQL Data Transfer

Source Server         : localhost_yaru
Source Server Version : 50611
Source Host           : localhost:3306
Source Database       : news

Target Server Type    : MYSQL
Target Server Version : 50611
File Encoding         : 65001

Date: 2016-01-29 13:11:03
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
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8 COMMENT='新闻表';

-- ----------------------------
-- Records of t_new
-- ----------------------------
INSERT INTO `t_new` VALUES ('3', '北京有霾出没 注意健康防护', 'http://t3.baidu.com/it/u=http%3A%2F%2Fthumb.takefoto.cn%2Fwp-content%2Fuploads%2F2016%2F01%2F201601280140271146-600x399-shuiyin.jpg&fm=30', '2', '2016-01-28 15:19:01', '2');
INSERT INTO `t_new` VALUES ('6', '就算没有黄宗泽 胡杏儿也是童话里最美的公主', 'http://img7.aili.com/201601/12/1452568240_90317500.jpg', '1', '2016-01-12 18:07:41', '2');
INSERT INTO `t_new` VALUES ('20', '“铁骑大军”寒潮返乡 腿绑麻袋保暖防尘', 'http://n.sinaimg.cn/news/20160128/bxGf-fxnvhvu7138696.jpg', '3', '2016-01-28 15:21:56', '2');
INSERT INTO `t_new` VALUES ('21', '营底特律 汽车业集体反击了科技巨头', 'http://d.hiphotos.baidu.com/news/q%3D100/sign=9e6d94a83e01213fc9334adc64e636f8/18d8bc3eb13533fa91f6335fafd3fd1f41345b7a.jpg', '1', '2016-01-28 15:17:53', '3');
INSERT INTO `t_new` VALUES ('22', '百度图片为什么不让用', 'http://d.hiphotos.baidu.com/news/w%3D638/sign=618c3d266a224f4a5799701031f69044/023b5bb5c9ea15cee5a4ab09b1003af33a87b26c.jpg', '1', '2016-01-28 00:32:26', '3');
INSERT INTO `t_new` VALUES ('28', '民资宽带可依靠资本运作获得机会', 'http://d.hiphotos.baidu.com/news/q=100/sign=f076fb16c8fc1e17fbbf88317a91f67c/09fa513d269759ee8eb22ccbb5fb43166c22dfd4.jpg', '2', '2016-01-13 15:06:10', '3');
INSERT INTO `t_new` VALUES ('29', '奥巴马国情咨文：美是地球上最强大国家 说美国变弱是吹牛', 'http://himg2.huanqiu.com/attachment2010/2016/0113/10/19/20160113101920577.jpg', '2', '2016-01-13 15:09:04', '5');
INSERT INTO `t_new` VALUES ('30', '国际油价逼近30美元 国内油价或继续暂缓调整', 'http://upload.cankaoxiaoxi.com/2016/0113/1452639841556.jpg', '3', '2016-01-13 15:11:56', '5');
INSERT INTO `t_new` VALUES ('31', '深圳通报滑坡事故处置情况：6名涉案嫌疑人在逃', 'http://upload.cankaoxiaoxi.com/2015/1221/1450656116830.jpg', '3', '2016-01-13 15:12:56', '4');
INSERT INTO `t_new` VALUES ('32', '土耳其警方在广场爆炸后逮捕59名疑似IS人员(图)', 'http://p2.cri.cn/M00/23/B7/CqgNOlaVvtiAIDQwAAAAAAAAAAA711.550x288.jpg', '3', '2016-01-13 15:13:46', '5');
INSERT INTO `t_new` VALUES ('39', '习近平治国理政四大特征', 'http://himg2.huanqiu.com/attachment2010/2016/0128/20160128100414471.jpg', '1', '2016-01-28 15:16:39', '2');
INSERT INTO `t_new` VALUES ('40', '春晚泄密谁care啊，猴子呢？', 'http://n.sinaimg.cn/news/transform/20160128/zbbM-fxnvhvu7148570.png', '1', '2016-01-28 15:22:48', '5');
INSERT INTO `t_new` VALUES ('41', '习近平会见美国国务卿', 'http://www.sinaimg.cn/dy/slidenews/1_t160/2016_04/2841_657914_210542.jpg', '1', '2016-01-28 15:23:28', '2');
INSERT INTO `t_new` VALUES ('42', '中国渔船韩国南部翻沉', 'http://www.sinaimg.cn/dy/slidenews/1_t160/2016_04/2841_657815_867634.jpg', '1', '2016-01-28 15:24:12', '3');
INSERT INTO `t_new` VALUES ('43', '军械发烧友家中藏炮弹', 'http://www.sinaimg.cn/dy/slidenews/1_t160/2016_04/2841_657768_553823.jpg', '1', '2016-01-28 15:25:02', '4');
INSERT INTO `t_new` VALUES ('45', '《年味》压馅', 'http://www.sinaimg.cn/dy/slidenews/1_t160/2016_04/2841_657872_688638.jpg', '2', '2016-01-28 15:27:13', '4');
INSERT INTO `t_new` VALUES ('46', '厦门715名女仆参加聚会', 'http://www.sinaimg.cn/dy/slidenews/1_t160/2016_04/2841_657746_412363.jpg', '3', '2016-01-28 15:27:42', '5');
INSERT INTO `t_new` VALUES ('47', '广西妈妈带俩娃买车票被骗1500元', 'http://n.sinaimg.cn/news/20160128/t_b2-fxnzanh0178520.jpg', '3', '2016-01-28 15:29:36', '4');
INSERT INTO `t_new` VALUES ('48', '香港猴子占马路中晒太阳 旁若无人', 'http://n.sinaimg.cn/news/20160128/Edip-fxnzanh0183500.jpg', '2', '2016-01-28 15:30:23', '3');
INSERT INTO `t_new` VALUES ('49', '《记忆》：消失的春运风景', 'http://n.sinaimg.cn/news/20160128/vFvc-fxnzanh0178285.jpg', '2', '2016-01-28 15:30:57', '5');
INSERT INTO `t_new` VALUES ('50', '索罗斯做空中国？不要过度解读了！', 'http://n.sinaimg.cn/news/transform/20160128/OK_U-fxnvhvu7148900.jpg', '1', '2016-01-29 12:42:12', '5');

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
