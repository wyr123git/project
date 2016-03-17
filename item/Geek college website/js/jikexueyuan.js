//热门推荐部分切换tab事件
var timeoutid;
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
            changeImg(true);
        } else if ($(this).hasClass("small_img2")) {
            changeImg(false);
        };
    });

    function changeImg(flag) {
        var imgNode = $(".center_img .active_img");
        var sort = Number(imgNode.attr("sort"));

        if (flag) {
            if (sort == 1) {
                sort = 6
            } else {
                sort -= 1;
            };
        } else {
            if (sort == 6) {
                sort = 1;
            } else {
                sort += 1;
            };
        };
        imgNode.attr("src", "img/jike" + sort + ".jpg");
        imgNode.attr("sort", sort);
    };
});
