<?php


	$result = $_GET['result'];



	$connect = new mysqli("localhost","root","root","plane");

	$sqlstr = "insert into score values('$result')";

	//判断是否插入成功
	$result = $connect->query($sqlstr);

	if($result){
		echo "success";
	}else{
		echo "fail";
	}
	
	
	
 ?>


 