//热门推荐部分切换tab事件
define(function(require) {
    var $ = require("jquery");
    var timeoutid;
    var count = 0;
    var flag = true;
    var speed = 10;
    $(document).ready(function() {
        $("#tab_ul li").each(function(i) {
            var liNode = $(this);
            liNode.mouseover(function() {
                timeoutid = setTimeout(function() {
                    $(".tab").removeClass("tab");
                    liNode.addClass("tab");
                    $(".first_box").removeClass("first_box");
                    $(".box").eq(i).addClass("first_box");
                }, 300);
            }).mouseout(function() {
                clearTimeout(timeoutid);
            });
        });
        //图片hover效果
        $(".center").hover(function() {
            $(".hua_img_div").fadeToggle(400);
        });

        $(".hua_img_div").mouseover(function() {
            $(this).css({
                background: "#000000"
            });
        }).mouseout(function() {
            $(this).css({
                background: "transparent"
            });
        });
        //图片切换效果点击事件
        $(".hua_img_div").click(function() {
            if ($(this).hasClass("small_img1")) {
                flag = true;
                slideImg();
            } else if ($(this).hasClass("small_img2")) {
                flag = false;
                slideImg();
            };
        });

        var slideImg  = function(){
            var _centerImg = $(".center_img");
            var cssLeft = Number(_centerImg.css("left").replace("px",""));
            if(flag && cssLeft == 0){
                speed = 50;
            }else if(!flag && cssLeft == -2550){
                speed = 50;
            }else{
                speed = 10;
            };
            changeImg();
        };

        var changeImg = function(){
            var _centerImg = $(".center_img");
            var cssLeft = Number(_centerImg.css("left").replace("px",""));
            var currLeft = 0;
            count += 1;
            if(flag){
                if(speed == 50){
                    currLeft = (cssLeft - speed)+"px";
                }else{
                    currLeft = (cssLeft + speed)+"px";
                };
            }else{
                if(speed == 50){
                    currLeft = (cssLeft + speed)+"px";
                }else{
                    currLeft = (cssLeft - speed)+"px";
                };
            };

            _centerImg.css({
                left:currLeft
            });

            if(count != 51){
                setTimeout(changeImg,10);
            }else{
                count = 0;
            };
        }
    });

});
