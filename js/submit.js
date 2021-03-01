var total = document.getElementById("total");
var honor = document.getElementById("honor");
var score = document.getElementById("score");

var btn = document.getElementById("reset");

total.innerText = score.innerText;


 btn.addEventListener("click",function(){
	 var result_value = total.innerText;
	 result_value = parseInt(result_value);
    
 	var xhr = new XMLHttpRequest();

 	xhr.open("GET","http://localhost/plane/js/request.php?result="+result_value);

 	xhr.send();

 	xhr.onreadystatechange = function(){
 		if(xhr.readyState==4){
 			if(xhr.status>=200 && xhr.status<300){
 				console.log(xhr.response);

 			}
 		}
 	}


 });



   



