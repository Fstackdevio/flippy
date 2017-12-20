<?php
	if(isset($_GET['action']) && isset($_GET['email']) && isset($_GET['code'])){
		
		$action = $_GET['action'];
		$code = $_GET['code'];
		$email = $_GET['email'];
		
		switch ($action){
			case 'reset':
				include './reset.php/?mail=$email';
				break;

			case 'activate':
				include './activate.php';
				break;
			
			default:
				include('./error.html');
				break;
		}
	}else{
		include('./err.html');		
	}

?>