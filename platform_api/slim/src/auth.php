<?php
// Routes
$app->post('/login', function ($request, $response) {
		$identifier = mysql_escape_string($_POST['email']);
		$sectionName = 'user_Sec';
		$pass = $class->getBy_id($identifier, 'dev_user', 'pass_k');
		$getpw = mysql_escape_string($password['pass_k']);
        $sth = $class->login($identifier, 'email', $getpw, $sectionName);
        return $this->response->withJson($sth);
});

$app->post('/register', function ($request, $response){
		$f_name = mysql_escape_string($_POST['f_name']);
		$l_name = mysql_escape_string($_POST['l_name']);
		$_email = mysql_escape_string($_POST['email']);
		$pass = mysql_escape_string($_POST['pass_k']);
		$mobile = mysql_escape_string($_POST['mobile']);
		$username = $f_name'.'$l_name;
		$Api = random_char('1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
		$date = date("Y-m-d h:i:sa");
		$activation = "NO";
		$passhash = password_hash($password2, PASSWORD_DEFAULT);
		$verify_code = $class->random_char('1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
        $sth = $class->register('dev_user', array($f_name, $l_name, $username, $_email, $passhash, $verify_code, $activation, $mobile, $api, $date), array('__f_name', '__l_name', '__u_name', '__email_', '__pword', '__verify_code', '__activation', '__mobile', '__apI_key', '__date'));
        if($sth === true)
        	$mail = $class->send_welcome($_email, $f_name'.'$l_name, $verify_code);
        		if($mail === true)
        			$response = "success";
        		else
        			$response = "false";
        else
        	$response = "error";
        return $this->response->withJson($response);
});

$app->post('/forgotPass', function ($request, $response){
		$param = mysql_escape_string($_POST['param']);
		$get = $class->getBy_id($param, 'dev_user', 'email');
		$username = $get['__u_name'];
		$date = date("Y-m-d h:i:sa");
		$code = $class->random_char('1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
		$send = $class->ResetMail($param,$username,$code);
		$history = $class->insert('recovery', $fields = array('_email', '_act_code', '_date'), $values = array($param, $code, $date));
		return $this->response->withJson($send);
});
