/**
 * Created by 23089 on 2020/4/7.
 */


//window.onload(
    //document.getElementById("prompt").innerHTML="为保证网页显示效果，请使用谷歌Chrome浏览器！"
    //window.innerHTML = alert('为保证网页兼容性，请使用谷歌Chrome浏览器 或者 Microsoft Edge83.0版本！')
    //);

//联系我们
function lianxi() {
    alert('联系邮箱：2504621340@qq.com,点击页尾链接更快捷哦~');
}


//random
function random() {
    var randomNum, i, j, m, n; //生成随机码
    var randomStr = [ 'a', 'b', 'c', 'd', 'e', 'f', 'h','2', '4', '3', '5', '6', '7', '8', '9'];
    i = Math.floor(Math.random() * 14);
    j = Math.floor(Math.random() * 14);
    m = Math.floor(Math.random() * 14);
    n = Math.floor(Math.random() * 14);
    document.getElementById("random").innerHTML = randomStr[m] + randomStr[n] + randomStr[i] + randomStr[j];
}


function pass() {
    var password = document.getElementById("first").value;
    var repsword = document.getElementById("again").value;
    if (password == '')
    {
        document.getElementById("miAgain").innerHTML = '密码不能为空!';
        return false;
    }
    if (password != repsword) {
        document.getElementById("miAgain").innerHTML = '两次密码不同，请重新输入！';
        return false;
    }
    if (password == repsword)
    {
        document.getElementById("miAgain").innerHTML = '密码有效！';
        return true;
    }
}
function submit() {
    var ranDom = document.getElementById("random").innerHTML;
    var ranDomBox = document.getElementById("randomBox").value;
    var color = document.getElementById("inform");
    if (ranDomBox == '')
    {
        color.style.color ='red';
        document.getElementById("inform").innerHTML = '验证码不能为空!';
        return false;
    }

    if (ranDomBox == ranDom)
    {
        color.style.color ='ForestGreen';
        document.getElementById("inform").innerHTML = '验证码正确';
        return true;
    }
    if (ranDomBox != ranDom){
        color.style.color ='red';
        document.getElementById("inform").innerHTML = '验证码错误！请重新输入';
        return false;
        }
}

//登录效果
function time() {
    var Time = document.getElementById("hour").innerHTML;
    var say;
    if (time < 11) {
        say = '上午好！';
    }
    else if (time > 11 && time < 14) {
        say = '中午好！';
    }
    else if (time > 14 && time < 18) {
        say = '下午好！';
    }
    else {
        say = '晚上好！';
    }
    return say;
}

function sign() {
    var oFF = document.getElementById("offSign");
    var oN = document.getElementById("onSign");
    var name =  document.getElementById("name").value;
    oFF.style.display = 'none';
    oN.style.display = 'block';
    if (name != ''){ oN.innerHTML ='用户 '+ name+ '，'+time();}
    else {oN.innerHTML = time();}

    }

