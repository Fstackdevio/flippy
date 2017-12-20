<?php
	require_once __DIR__ . '/../../../platform_api/class/class.php';
		$class = new Fclass_plateform;
		$isValid = validate($fields = array('email', 'pass1', 'pass2'));
		$password = $_POST[$isValid['pass1']];
		$password2 = $_POST[$isValid['pass2']];
		$email = $_POST[$isValid['email']];
		$passhash = password_hash($password2, PASSWORD_DEFAULT);
		if ($isValid === false)
			$validate = $class->match($password, $password2);
			if($validate === true)
				$update = $class->update('dev_users', $fields = array('__pword'), $value = ($passhash));
			else
				include('./../error.php');
			if($update === true)
				include('./../success.php');
			else
				include('./../error.php');
		else
			include('./../error.php');
?>