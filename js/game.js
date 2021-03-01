
var plane_x,plane_y;
var bullets = [];
var enemys = [];
//子弹的宽度
var bulletWidth = 6;
//子弹的高度
var bulletHeight = 14;

//音乐播放按钮
var music_condition=1;
music.onclick = function(){
    if(music_condition==1){
         turn.pause();
         music_condition = 0;
    }else{
        turn.play();
        music_condition = 1;
    }
   
}

//键盘控制音乐
document.onkeydown = function(e){
    var e = e||window.event;
    if(e.keyCode==83){
        if(music_condition==1){
            turn.pause();
            music_condition = 0;
        }else{
            turn.play();
            music_condition = 1;
        }
    }
}


//设置我军飞机 移动
plane.onmousemove = function(ev){
    var e = e || window.event;
    

    var dx = e.clientX-plane.width/2;
    var dy = e.clientY-plane.height/2;

    if(dx>boxLeft+boxWidth-planeWidth){
       
    }else{
        if(dx<boxLeft){
            
        }else{
            plane.style.left =  dx-boxLeft + "px";
            plane_x = dx-boxLeft;
        }
    }


    if(dy>boxTop+boxHeight-planeHeight){
        
    }else{
        if(dy<boxTop){
           
        }else{
            plane.style.top = dy-boxTop+'px';
            plane_y = dy-boxTop;
        }
    }
}


//手机触摸事件
plane.addEventListener("touchmove",function(e){
            e.preventDefault();
         
            var e = e || window.event;


            var dx = e.touches[0].clientX-planeWidth/2;
            var dy = e.touches[0].clientY-planeHeight/2;
         

            if(dx>boxLeft+boxWidth-planeWidth){
       
            }else{
                if(dx<boxLeft){
                    
                }else{
                    plane.style.left =  dx-boxLeft+ "px";
                    plane_x = dx-boxLeft;
                }
            }


            if(dy>boxTop+boxHeight-planeHeight){
                
            }else{
                if(dy<boxTop){
                   
                }else{
                    plane.style.top = dy-boxTop+'px';
                    plane_y = dy-boxTop;
                }
            }

});



//获取样式
function getStyle(ele,attr){

    var boxStyle = window.getComputedStyle(ele,null)[attr];

    boxStyle = parseInt(boxStyle);

    return boxStyle;
}


//我军发射子弹
var bullet_time;

function shot(){
    if(bullet_time) return;
    bullet_time = setInterval(function(){
        bullet();

    },100);
 
}


//创建子弹
function bullet(){

    var bullet = new Image();
    bullet.src="images/fire.png";
    bullet.className = 'bullet';

    //获取飞机的位置
    var plane_x = getStyle(plane,'left');
    var plane_y = getStyle(plane,'top');

    //确定子弹的位置
    var bullet_x = plane_x+planeWidth/2-bulletWidth/2;
    var bullet_y = plane_y-bulletHeight;

    bullet.style.left = bullet_x+'px';
    bullet.style.top = bullet_y+'px';


    bulletsP.appendChild(bullet);
    bullets.push(bullet);
   
    move(bullet,'top');
    delete_bullet();
}

//当子弹过多，会造成页面卡顿
function delete_bullet(){
     var bullet_len = document.getElementsByClassName("bullet");
     var bullets_ele = document.getElementById("bullets");
     // console.log(bullet_len);
     var i;
    if(bullet_len.length>=20){
        for(i=bullet_len.length;i>=20;i--){
        bullets_ele.removeChild(bullets_ele.childNodes[i]);
          bullets.splice(20,bullet_len.length);
        }
        // console.log("子弹数量"+bullet_len.length);
    }
}

//子弹运动
function move(ele,attr){
    var speed = -8;
    ele.timer = setInterval(function(){
        var moveVal = getStyle(ele,attr);

        //子弹运动出游戏界面，清除定时器
        if(moveVal<=-bulletHeight){
            clearInterval(ele.timer);
           
            bulletsP.removeChild(ele);
            //删除bullets数组中的第一个元素
            bullets.splice(0,1);
        }else{
            ele.style[attr] = moveVal+speed+'px';
            //每一个敌机运动检测碰撞
          
        }

    },15);
}


//创建敌军数据对象
var enemysObj = {
    enemy1:{
        width:37,
        height:39,
        score:100,
        hp:100
    },
    enemy2:{
        width:105,
        height:144,
        score:300,
        hp:800
    },
    enemy3:{
        width:130,
        height:100,
        score:500,
        hp:2000
    }
}


//锁定敌机的定时器
var b=null;

function appearEnemy(item){
    b = setInterval(function(){
        //创建敌机
        createEnemy(item);
      
    },1000);
}


//制造敌机
function createEnemy(item){
    //敌机出现概率的数据
    var percentData = [1,1,1,1,1,1,1,1,2,3,3,3];

    //敌机的类型
    var enemyType = percentData[Math.floor(Math.random()*percentData.length)];

    //得到当前敌机的随机数据
    var enemyData = enemysObj["enemy"+enemyType];


    //获取敌机的数量
    var enemy_len = document.getElementsByClassName("enemy").length;
    //如果页面中已经存在超过10架敌机，则不创建敌机
    if(enemy_len>=10){

    }else{


        //创建敌机所在的元素
        var enemy = new Image(enemyData.width,enemyData.height);
        enemy.className = 'enemy';
        enemy.src = 'images/enemy'+enemyType+'.png';
        enemy.score = enemyData.score;
        enemy.hp = enemyData.hp;
        enemy.dead = false;//敌机存活

        //确定敌军出现的位置
        var enemyL = Math.floor(Math.random()*(boxWidth-enemyData.width+1));

        var enemyT = -boxTop;
        enemy.style.left = enemyL+'px';
        enemy.style.top = enemyT+'px';

        enemysP.appendChild(enemy);
        enemys.push(enemy);
        enemyMove(enemy,'top',item);
    }

    //调用删除函数
   
}

// enemy
//当敌机过多，会造成页面卡顿
function delete_enemy(){
     var enemy_len = document.getElementsByClassName("enemy");//obj
     var enemys_ele = document.getElementById("enemys");//obj
    // console.log(enemy_len);
    // console.log(typeof enemy_len[0]);

     var i;
    if(enemy_len.length>=10){
        console.log("超过10个敌机");
        for(i=enemy_len.length;i>=10;i--){
           //删除超过数量的敌机

         
          enemys.splice(20,enemy_len.length);
        }
        console.log("飞机数量"+enemy_len.length);
    }
}


 


//敌机的运动
function enemyMove(ele,attr,item){
    var speed = 1;
    ele.timer = setInterval(function(){

        var moveVal = getStyle(ele,attr);
        if(moveVal>=boxTop+boxHeight){
            clearInterval(ele.timer);
           enemysP.removeChild(ele);
           //删除enmeys数组中第一个元素
           enemys.splice(0,1);
        }else{
            ele.style[attr] = moveVal+speed+'px';

              danger(ele);

              // 检测碰撞
              gameOver();
        }
    },item);
}



//background-img 定时器
var c = null;
//backgruond_y轴的值
var background_py = 0;
//background-image move函数
function bgMove(){
    c = setInterval(function(){
        background_py++;

        if(background_py>=boxHeight){
            background_py = 0;
        }
        box.style.backgroundPositionY = background_py+'px';

    },10);
}


//检测敌机和子弹的碰撞
function danger(enemy){
    for(var i=0;i<bullets.length;i++){
      // 得到子弹的左上边距
            var bulletL = getStyle(bullets[i],"left")
            ,   bulletT = getStyle(bullets[i],"top");


            // 得到敌机的左上边距
            var enemyL = getStyle(enemy,"left")
            ,   enemyT = getStyle(enemy,"top");
            // 得到敌机的宽高
            var enemyW = getStyle(enemy,"width")
            ,   enemyH = getStyle(enemy,"height");

           

        var condition = bulletL + bulletWidth >= enemyL && bulletL <= enemyL + enemyW && bulletT <= enemyT + enemyH && bulletT + bulletHeight >= enemyT;
       
        if(condition){
            // console.log('碰撞');
            bullet_music.play();
            clearInterval(bullets[i].timer);
            bulletsP.removeChild(bullets[i]);
            bullets.splice(i,1);
            //子弹和敌机发生碰撞后，敌机血量减少，血量0时，删除敌机
           enemy.hp -= 100;
            if(enemy.hp==0){
                //删除敌机
                clearInterval(enemy.timer);
                //替换
                enemy.src = 'images/boom_small.png';
                //标记死亡敌机
                enemy.dead = true;
                
                //延迟删除集合和文档中的死亡敌机
                setTimeout(function(){
                    enemysP.removeChild(enemy);
                },300);
                //计算得分

                scores += enemy.score;
                score.innerHTML = scores;
            }
        }
    }
}

//飞机碰撞，游戏结束
function gameOver(){
    for(var i=0;i<enemys.length;i++){
        if(!enemys[i].dead){
            //和存活的飞机碰撞
            var enemyL = getStyle(enemys[i],"left");
            var enemyT = getStyle(enemys[i],"top");

            var enemyW = getStyle(enemys[i],"width");
            var enemyH = getStyle(enemys[i],"height");

            var myPlaneL = getStyle(plane,"left");
            var myPlaneT = getStyle(plane,"top");

            var condition = myPlaneL + planeWidth >= enemyL && myPlaneL <= enemyL + enemyW && myPlaneT <= enemyT + enemyH && myPlaneT + planeHeight >= enemyT;
            if(condition){
                bgm_over.play();
                //清除定时器，创建子弹的、创建飞机的、游戏背景图的
                clearInterval(bullet_time);
                clearInterval(b);
                clearInterval(c);
                bullet_time = null;
                b = null;
                c = null;

                //删除子弹和敌机元素
                var enemy = document.getElementsByClassName("enemy");
              
                // box.removeChild(enemysP);

                //集合清空
                bullets = [];
                enemys = [];

                //删除飞机事件
                plane.onmousemove = null;

               
                //飞机闪现3次
                var item = true;
                var show_hidden_time=0;
                var show_hidden = setInterval(function(){
                    if(item){
                        plane.style.display = 'none';
                        item = false;
                        
                    }else{
                        plane.style.display = 'block';
                        item = true;
                        
                    }

                    show_hidden_time++;
                    if(show_hidden_time==6){
                        clearInterval(show_hidden);
                        //己方飞机消失
                        plane.style.display = 'none';
                         //出现游戏结束
                        final.style.display = 'block';

                        total.innerText = scores;
                    }
                },300);

           
            }
        }
    }
}

//数据库交互开始


//数据库交互结束

//点击按钮重新开始
reset.onclick = function(){

   scores = 0;

   score.innerText = scores;
 
    wrap.style.display = 'block';
    box.style.backgroundImage = "url(./images/bg_1.jpg)";
    score.style.display = 'none';
   
    final.style.display = 'none';


    //重新设置地图
    box.style.width="100%";
    box.style.height="100%";

    wrap.style.width="100%";
    wrap.style.height="100%";

    //初始化音乐播放按钮
    music.style.display="none";

    //初始化音乐
    turn.pause();


    //初始化飞机的位置
    var init_top = boxHeight*0.8-boxTop-planeHeight;
    plane.style.top = init_top+'px';
    plane.style.left = boxWidth/2-planeWidth/2+'px';


    //设置我军飞机 移动
    plane.onmousemove = function(ev){
        var e = e || window.event;

        var dx = e.clientX-plane.width/2;
        var dy = e.clientY-plane.height/2;

        if(dx>boxLeft+boxWidth-planeWidth){
           
        }else{
            if(dx<boxLeft){
                
            }else{
                plane.style.left =  dx-boxLeft + "px";
                plane_x = dx-boxLeft;
            }
        }


        if(dy>boxTop+boxHeight-planeHeight){
            
        }else{
            if(dy<boxTop){
               
            }else{
                plane.style.top = dy-boxTop+'px';
                plane_y = dy-boxTop;
            }
        }
    }
}