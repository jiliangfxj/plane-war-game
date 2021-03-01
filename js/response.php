<?php


	$connect = new mysqli("localhost","root","root","plane");

	$read_data = "select * from score";

	$result = $connect->query($read_data);


	// if(mysqli_num_rows($result)>0){
	// 	while($row=mysqli_fetch_array($result)){
	// 		echo $row["result"].'<br>';
	// 	}
	// }else{
	// 	echo "0 结果";
	// }
	// 
	// 
	$arr_obj;
	$i=0;
	if(mysqli_num_rows($result)>0){
		while($row=mysqli_fetch_array($result)){
			
			$arr_obj[] = $row["result"];
			echo $arr_obj[$i].' ';

			$i++;
			// $i++;
		}
	}else{
		echo "0 结果";
	}



?>