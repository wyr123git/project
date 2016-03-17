$(document).ready(function() {
    $(window).on("load", function() { //加载图片
        imgLocation();

        var dataImg = {
            "data": [{
                "src": "1.jpg"
            }, {
                "src": "2.jpg"
            }, {
                "src": "3.jpg"
            }, {
                "src": "4.jpg"
            }, {
                "src": "5.jpg"
            }]
        };
        window.onscroll = function() { //监听事件
            if (scrollSideHalf()) {
                $.each(dataImg.data, function(index, value) {
                    var box = $("<div>").addClass("box").appendTo($(".container"));
                    var content = $("<div>").addClass("content").appendTo(box);
                    $("<img>").attr("src", "img/" + value.src).appendTo(content);
                });
                imgLocation();
            };
        }

    });
});

function scrollSideHalf() { //
    var box = $(".box"); //html里面的所有class名称为box的元素
    var lastBoxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2); //滚动条滚动到最后一张图片的一半时的高度
    var windowHeight = $(window).height(); //当前设备的高度
    var scrollHeight = $(window).scrollTop(); //滚动条滚滚上去的高度

    return (lastBoxHeight < windowHeight + scrollHeight) ? true : false;
};


function imgLocation() { //图片加载过程中的排列
    var box = $(".box"); //html里面的所有class名称为box的元素
    var boxWidth = box.eq(0).width(); //盒子的宽度
    var num = Math.floor($(window).width() / boxWidth); //设备一排能放多少个图片
    var boxArr = [];

    box.each(function(index, value) {
        var boxHeight = $(value).height(); //盒子的高度为循环的当前的盒子高度

        if (index < num) {
            boxArr[index] = boxHeight;

        } else {
            var minHeight = Math.min.apply(null, boxArr);
            var minBoxIndex = $.inArray(minHeight, boxArr);
            var minBoxLeft = box.eq(minBoxIndex).position().left;


            $(this).css({
                "position": "absolute",
                "top": minHeight,
                "left": minBoxLeft
            });
            boxArr[minBoxIndex] += boxHeight;

        };

    });
};
