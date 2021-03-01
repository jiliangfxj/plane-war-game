
//获取box
var box = document.getElementById("box");
var boxTop = box.offsetTop;
var boxLeft = box.offsetLeft;


var boxWidth = window.getComputedStyle(box).width;
var boxHeight = window.getComputedStyle(box).height;
boxWidth = parseInt(boxWidth);
boxHeight = parseInt(boxHeight);


//获取wrap
var wrap = document.getElementById("wrap");

//获取score
var score = document.getElementById("score");

//获取plane
var plane = document.getElementById("plane");
var planeWidth = window.getComputedStyle(plane).width;
var planeHeight = window.getComputedStyle(plane).height;
planeWidth = parseInt(planeWidth);
planeHeight = parseInt(planeHeight);



//获取bullets
var bulletsP = document.getElementById("bullets");
//获取enemys
var enemysP = document.getElementById("enemys");

//获取得分统计
var final = document.getElementById("final");
var history = document.getElementById("history");
var total = document.getElementById("total");
var honor = document.getElementById("honor");

//获取音乐按钮
var music = document.getElementById("music");


//获取音乐
var turn = document.getElementsByTagName("audio")[0];

//获取子弹音乐
var bullet_music = document.getElementsByTagName("audio")[1];

//获取游戏结束音乐
var bgm_over = document.getElementsByTagName("audio")[2];

//获取简单模式按钮
var mode_simple =document.getElementById("mode_simple");
//获取中等模式
var mode_middle = document.getElementById("mode_middle");
//获取困难模式
var mode_hard = document.getElementById("mode_hard");
//获取极速模式
var mode_speed = document.getElementById("mode_speed");


//获取重新开始按钮
var reset = document.getElementById("reset");

var scores = 0;


//设置按钮位置
var view_width = document.documentElement.clientWidth;
var view_height = document.documentElement.clientHeight;

music.style.left = view_width+'px';


mode_simple.onclick = function(){
    
    wrap.style.display = 'none';
    score.style.display = 'block';
    music.style.display = 'block';

    //音乐自动播放
    turn.play();



    box.style.width="512px";
    box.style.height="768px";

    wrap.style.width="512px";
    wrap.style.height="680px";
    box.style.backgroundImage = "url(./images/bg_1.jpg)";
    plane.style.display = 'block';
   

    shot();
    appearEnemy(10);
    bgMove();
}
mode_middle.onclick = function(){
    wrap.style.display = 'none';
    score.style.display = 'block';
    music.style.display = 'block';
     
    //音乐自动播放
    turn.play();

    box.style.width="512px";
    box.style.height="768px";

    wrap.style.width="512px";
    wrap.style.height="680px";
    box.style.backgroundImage = "url(./images/bg_2.jpg)";
    plane.style.display = 'block';
  
    
    shot();
    appearEnemy(5);
    bgMove();
}

mode_hard.onclick = function(){
    wrap.style.display = 'none';
    score.style.display = 'block';
    music.style.display = 'block';
     
     //音乐自动播放
    turn.play();

    box.style.width="512px";
    box.style.height="768px";

    wrap.style.width="512px";
    wrap.style.height="680px";
    box.style.backgroundImage = "url(./images/bg_3.jpg)";
    plane.style.display = 'block';
   
    
    shot();
    appearEnemy(2);
    bgMove();
}

mode_speed.onclick = function(){

   
    wrap.style.display = 'none';
    score.style.display = 'none';
    music.style.display = 'block';
   
    //音乐自动播放
    turn.play();

    box.style.width="512px";
    box.style.height="768px";

    wrap.style.width="512px";
    wrap.style.height="680px";
    box.style.backgroundImage = "url(./images/bg_4.jpg)";
    plane.style.display = "none";
}


//初始化飞机的位置

var init_top = boxHeight*0.8-boxTop-planeHeight;

// plane.style.top = boxHeight-boxTop-planeHeight-planeHeight+'px';
plane.style.top = init_top+'px';
plane.style.left = boxWidth/2-planeWidth/2+'px';





