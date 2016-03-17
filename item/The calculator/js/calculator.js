var num = 0,
    resulet = 0,
    numshow = "0";
var input = 0; //判断当前输入状态的标志
var calcul = 0; //判断当前计算状态的标志
var repeat = 0; //防止重复按键的标志
function command(num) {
    var str = String(document.box.numScreen.value); //获取当前显示的数据
    str = (str != "0") ? str : "";
    //如果当前值不是0，则返回当前值，否则返回空。
    str = str + String(num); //给当前值追加一个字符
    document.box.numScreen.value = str; //刷新显示
    input = 0; //重置输入状态的标志
    repeat = 0; //重置防止重复按键的标志

}

function del() { //退格
    var str = String(document.box.numScreen.value); //获取当前显示的数据
    str = (str != "0") ? str : "";
    //如果当前值不是0，则返回当前值，否则返回空。
    str = str.substr(0, str.length - 1);
    str = (str != "") ? str : "0";
    document.box.numScreen.value = str; //刷新显示
}

function clearscreen() { //清除
    num = 0;
    resulet = 0;
    numshow = "0";
    document.box.numScreen.value = "0";
}

function zero() { //00
    var str = String(document.box.numScreen.value);
    str = (str != "0") ? ((input == 0) ? str + "00" : "0") : "0";
    //如果当前值不是0，且输入状态为0，则返回str+"00",否则返回"0"
    document.box.numScreen.value = str;
    input = 0;
}

function dot() { //点
    var str = String(document.box.numScreen.value);
    str = (str != "0") ? ((input == 0) ? str : "0") : "0";
    //如果当前值不是0，且输入的状态为0，则返回当前值,否则返回"0"
    for (i = 0; i <= str.length; i++) { //判断是否已经有一个点号
        if (str.substr(i, 1) == ".") return false; //已经有就不在插入
    }
    str = str + ".";
    document.box.numScreen.value = str;
    input = 0;
}

function add() { //加法
    var currentInput = document.box.numScreen.value; //获取当前显示的数据
    if (isNaN(currentInput)) {
        var flag = getFlag();
        var num = currentInput.replace(flag, "");
        if (calcul != 1) {
            document.box.numScreen.value = num + "+";
        };
        input = 1; //更改输入状态
        calcul = 1; //更改计算状态为加
    } else {
        calculator(); //调用计算函数
        input = 1; //更改输入状态
        calcul = 1; //更改计算状态为加
        operateInput();
    }
}

function reduce() { //减法
    var currentInput = document.box.numScreen.value;
    if (isNaN(currentInput)) {
        var flag = getFlag();
        var num = currentInput.replace(flag, "");//把几++的加替换为空。
        
        if (calcul != 2) {
            document.box.numScreen.value = num + "-";
        };
        input = 1; //更改输入状态
        calcul = 2; //更改计算状态为加
    } else {
        calculator(); //调用计算函数
        input = 1; //更改输入状态
        calcul = 2; //更改计算状态为减
        operateInput();
    }
}

function sin(){//求sin
    var currentInput = document.box.numScreen.value;
    var x = 0;
    if (isNaN(currentInput)) {
        alert("请输入一个角度值！");
    }else{
        x = Math.sin(Number(currentInput)*(2*Math.PI/360));
        document.box.numScreen.value = String(x);
    };
};

function cos(){//求cos
    var currentInput = document.box.numScreen.value;
    var x = 0;
    if (isNaN(currentInput)) {
        alert("请输入一个角度值！");
    }else{
        x = Math.cos(Number(currentInput)*(2*Math.PI/360));
        document.box.numScreen.value = String(x);
    };
};

function tan(){//求tan
    var currentInput = document.box.numScreen.value;
    var x = 0;
    if (isNaN(currentInput)) {
        alert("请输入一个角度值！");
    }else{
        x = Math.tan(Number(currentInput)*(2*Math.PI/360));
        document.box.numScreen.value = String(x);
    };
};

function pow() { //幂运算
    var currentInput = document.box.numScreen.value; //获取当前显示的数据
    if (isNaN(currentInput)) {
        var flag = getFlag();
        var num = currentInput.replace(flag, "");
        if (calcul != 6) {
            document.box.numScreen.value = num + "@";
        };
        input = 1; //更改输入状态
        calcul = 6; //更改计算状态为幂运算
    } else {
        calculator(); //调用计算函数
        input = 1; //更改输入状态
        calcul = 6; //更改计算状态为幂运算
        operateInput();
    }
}

function sqrt(){//求开方
    var currentInput = document.box.numScreen.value;
    var x = 0;
    if (isNaN(currentInput)) {
        alert("请输入一个数字！");
    }else{
        x = Math.sqrt(Number(currentInput));
        document.box.numScreen.value = String(x);
    };
};

function ride() { //乘法
    var currentInput = document.box.numScreen.value;
    if (isNaN(currentInput)) {
        var flag = getFlag();
        var num = currentInput.replace(flag, "");
        if (calcul != 2) {
            document.box.numScreen.value = num + "x";
        };
        input = 1; //更改输入状态
        calcul = 3; //更改计算状态为加
    } else {
        calculator(); //调用计算函数
        input = 1; //更改输入状态
        calcul = 3; //更改计算状态为乘
        operateInput();
    }
}

function divide() { //除法
    var currentInput = document.box.numScreen.value;
    if (isNaN(currentInput)) {
        var flag = getFlag();
        var num = currentInput.replace(flag, "");
        if (calcul != 2) {
            document.box.numScreen.value = num + "/";
        };
        input = 1; //更改输入状态
        calcul = 4; //更改计算状态为加
    } else {
        calculator(); //调用计算函数
        input = 1; //更改输入状态
        calcul = 4; //更改计算状态除
        operateInput();
    }
}

function percent() { //百分比
    var currentInput = document.box.numScreen.value;
    if (isNaN(currentInput)) {
        var flag = getFlag();
        var num = currentInput.replace(flag, "");
        if (calcul != 2) {
            document.box.numScreen.value = num + "%";
        };
        input = 1; //更改输入状态
        calcul = 5; //更改计算状态为加
    } else {
        calculator(); //调用计算函数
        input = 1; //更改输入状态
        calcul = 5; //更改计算状态为百分比
        operateInput();
    }
}

function equal() { //等于
    calculator(); //调用计算函数
    input = 1;
    num = 0;
    resulet = 0;
    numshow = "0";
}

function calculator() {
    var currentInput = document.box.numScreen.value;

    if (isNaN(currentInput)) {
        numshow = Number(currentInput.split(getFlag())[1]);
    } else {
        numshow = Number(currentInput);
    }
    if (num != 0 && repeat != 1) { //判断前一个运算数是否为0以及防止重复按键的状态
        switch (calcul) { //判断要输入的状态
            case 1:
                resulet = num + numshow;
                break; //计算为加
            case 2:
                resulet = num - numshow;
                break; //计算为减
            case 3:
                resulet = num * numshow;
                break; //计算为乘
            case 4:
                if (numshow == 0) {
                    resulet = "0不能作为除数";
                } else {
                    resulet = num / numshow;
                };
                break; //计算为除
            case 5:
                if (numshow == 0) {
                    resulet = 0;
                } else {
                    resulet = num % numshow;
                };
                break; //计算为余数
            case 6:
                resulet = Math.pow(num,numshow);
                break; //计算为幂运算
        }
        repeat = 1; //避免重复按键
    } else {
        resulet = numshow;
    }
    numshow = String(resulet);
    document.box.numScreen.value = numshow;
    num = resulet; //存储当前值
}

function operateInput() {
    document.box.numScreen.value = document.box.numScreen.value + getFlag(); //给输入框赋值为"输入值和+"
};

function getFlag() {
    var flag = "";
    switch (calcul) { //判断要输入的状态
        case 1:
            flag = "+";
            break; //计算为加
        case 2:
            flag = "-";
            break; //计算为减
        case 3:
            flag = "x";
            break; //计算为乘
        case 4:
            flag = "/";
            break; //计算为除
        case 5:
            flag = "%";
            break; //计算为余数
        case 6:
            flag = "@";
            break; //计算为幂运算
        case 7:
            flag = "#";
            break; //计算为幂运算
    };
    return flag;
};
