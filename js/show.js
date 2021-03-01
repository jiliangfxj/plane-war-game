var mode_speed = document.getElementById("mode_speed");

var show_content = document.getElementsByClassName("show_content");

var return_btn = document.getElementsByClassName("return_btn");
var show_val = document.getElementsByClassName("show_val");


var box = document.getElementById("box");


 mode_speed.addEventListener("click",function(){

	 
 	var xhr = new XMLHttpRequest();

 	xhr.open("GET","http://localhost/plane/js/response.php");

 	xhr.send();

 	xhr.onreadystatechange = function(){
 		if(xhr.readyState==4){
 			if(xhr.status>=200 && xhr.status<300){
 				
 				//获取返回到的数据
 				// console.log(xhr.response);
 				var response_value = xhr.response;

 				var show_arr = response_value.split(" ");
 				// console.log(show_arr);


 				//转换成数字类型的数组
 				for(var i=0;i<show_arr.length-1;i++){
 					show_arr[i] = parseInt(show_arr[i]);
 				}

 				var max;
	　　　　　　　//遍历数组，默认arr中的某一个元素为最大值，进行逐一比较
	            for(var i=0; i<show_arr.length-1; i++){
	　　　　　　　　　　//外层循环一次，就拿arr[i] 和 内层循环arr.legend次的 arr[j] 做对比
	                for(var j=i; j<show_arr.length-1; j++){
	                    if(show_arr[i]<show_arr[j]){
	                        //如果arr[j]大就把此时的值赋值给最大值变量max
	　　　　　　　　　　　　　max=show_arr[j];
	                        show_arr[j]=show_arr[i];
	                        show_arr[i]=max;
	                    }
	                }
	            }
	           // console.log(show_arr);

	           // var view_width;

	           
	           // if(view_width<=500){
	           // 	view_width = document.documentElement.clientWidth || document.body.clientWidth;
	           // }else{
	           // 	view_width = 0;
	           // }
	           // console.log(view_width);

	           var show_div = document.createElement("div");
	           show_div.style.height = '80%';
	           show_div.style.overflowY	 = 'scroll';
	           show_div.style.margin = '0 auto';

	         	// show_div.style.position = 'absolute';
	         	// show_div.style.left = view_width/2+'px';
	         	// show_div.style.transform = 'translateX(-50%)';


	           //设置类名
	           show_div.className = "show_content";




	           var h_node = document.createElement("h2");
	           var h_text = document.createTextNode("分数排名");
	           		h_node.style.color = '#44E1F5';
	 				h_node.style.fontWeight = 'bold';
	 				h_node.style.fontSize = '2em';
	 				h_node.style.textAlign = 'center';
	 				h_node.style.lineHeight = 2.5;


	 				//设置标题
	 				h_node.className = "show_title";

	 
	 				h_node.appendChild(h_text);
	 				box.appendChild(h_node);



	 			var btn_node = document.createElement("h5");
	 			var btn_text = document.createTextNode("回到主界面");
	 				btn_node.style.color = '#44E1F5';
	 				btn_node.style.fontWeight = 'bold';
	 				btn_node.style.fontSize = '2em';
	 				btn_node.style.textAlign = 'center';
	 				btn_node.style.lineHeight = 2.5;
	 				btn_node.style.position = 'absolute';
	 				btn_node.style.bottom = '15%';
	 				btn_node.style.left = '50%';
	 				btn_node.style.transform = 'translateX(-50%)';


	 				//设置标题
	 				btn_node.className = "return_btn";

	 
	 				btn_node.appendChild(btn_text);
	 				box.appendChild(btn_node);



	 			// var btn_node = document.createElement("h5");
	 			// var btn_text = document.createTextNode("回到主界面");
	 			// 	btn_node.style.position = 'absolute';
	 			// 	btn_node.style.textAlign = 'center';
	 			// 	btn_node.style.color = '#44E1F5';
	 			// 	btn_node.style.fontWeight = 'bold';
	 			// 	btn_node.style.fontSize = '2em';
	 			// 	btn_node.style.bottom ='3%';
	 			// 	btn_node.style.left = '50%';
	 			// 	btn_node.style.transform = 'translateX(-50%)';

	 			// 	//设置类名
	 			// 	btn_node.className='return_btn';

	 			// 	btn_node.appendChild(btn_text);
	 			// 	show_div.appendChild(btn_node);
	 			// 	box.appendChild(show_div);


	           for(var i=0;i<show_arr.length-1;i++){
		           	var p = document.createElement("p");
	 				var textnode = document.createTextNode(show_arr[i]);
	 				p.style.color = '#44E1F5';
	 				p.style.fontWeight = 'bold';
	 				p.style.fontSize = '2em';
	 				p.style.textAlign = 'center';
	 				p.style.lineHeight = 2.5;

	 				//设置类名
	 				p.className = 'show_val';

	 				p.appendChild(textnode);
	 				show_div.appendChild(p);
	 				box.appendChild(show_div);
	           }



	            	var return_btn = document.getElementsByClassName("return_btn")[0];
					// console.log(return_btn);



					return_btn.onclick = function(){


						function deleteChild() { 
					        var e = document.getElementsByClassName("show_content")[0]; 
					        var first = e.firstElementChild; 
					        while (first) { 
					            first.remove(); 
					            first = e.firstElementChild; 
					        } 
    					} 
						deleteChild();

						var show_content = document.getElementsByClassName("show_content")[0];

						box.removeChild(show_content);




						var show_title = document.getElementsByClassName("show_title")[0];

						box.removeChild(show_title);



						var return_btn = document.getElementsByClassName("return_btn")[0];

						box.removeChild(return_btn);



						show_content.style.display = 'none';
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


					}
				}
		}




 });



