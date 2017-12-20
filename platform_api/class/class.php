<?php 
	class Fclass_plateform{	
		public function __construct(){
	 		include('dbconf.php');
	 		$db = new connect();
        	$this->DBcon = $db->startConn();
		}

		public function getAll($table){
			$SQL = "SELECT * FROM $table LIMIT 1";
			$q = $this->DBcon->query($SQL) or die("Failed");
			while ($r = $q->fetch(PDO::FETCH_ASSOC)) {
				$data[] = $r;
			}
			return $data;
		}

		public function insert($table, array $fields, array $values) {
		    $numFields = count($fields);
		    $numValues = count($values);
		    if($numFields === 0 or $numValues === 0)
		        throw new Exception("At least one field and value is required.");
		    if($numFields !== $numValues)
		        throw new Exception("Mismatched number of field and value arguments.");

		    $fields = '`' . implode('`,`', $fields) . '`';
		    $values = "'" . implode("','", $values) . "'";
		    $sql = "INSERT INTO {$table} ($fields) VALUES($values)";
			
			if ($q=$this->DBcon->prepare ( $sql )) {
		       // echo json_encode($sql);
		        if ($q->execute()) {
		            return true;
		        }
		    }
		    return false;
		}

		public function update2($table,$values=array(),$where){
            $args=array();
			foreach($values as $field=>$value){
				$args[]=$field.'="'.$value.'"';
			}
			$spilt = implode(',',$args);
			$sql='UPDATE '.$table.' SET '.$spilt.' WHERE '.$where;
   			if($q=$this->DBcon->prepare($sql)){
   				if ($q->execute()) {
   					return true;
   				}
   			}
   			return false;
    	}

		public function update($table, array $fields, array $values) {
		    $numFields = count($fields);
		    $numValues = count($values);
		    if($numFields === 0 or $numValues === 0)
		        throw new Exception("At least one field and value is required.");
		    if($numFields !== $numValues)
		        throw new Exception("Mismatched number of field and value arguments.");

		    $fields = '`' . implode('`,`', $fields) . '`';
		    $values = "'" . implode("','", $values) . "'";
		    $sql = "UPDATE {$table} SET {$fields} = {$values}";
			
			if ($q=$this->DBcon->prepare ( $sql )) {
		       // echo json_encode($sql);
		        if ($q->execute()) {
		            return true;
		        }
		    }
		    return false;
		}

		public function isExist($identifier, $table, $item){
			$stmt = $this->DBcon->prepare("SELECT * FROM $table WHERE $item = :val");
		    $stmt->execute(array(':val' => $identifier));
		    if($stmt->rowCount() > 0){
		        return 'exist';
		    } else {
		        return 'notexist';
		    }
		}

		public function validate($fields){
			// $fields = array('subject', 'email', 'phone', 'message');
			$error = false; 
			foreach($fields AS $fieldname) { 
			  if(!isset($_POST[$fieldname]) || empty($_POST[$fieldname])) {
			    echo 'Field '.$fieldname.' missing!<br />';
			    $error = true; //Yup there are errors
			  }else{
			  	$error = false;
			  }
			}
			return $error;
		}

		public function getBy_id($email, $table, $param){
			$SQL = "SELECT * from $table where {$param} = :email";
			$q = $this->DBcon->prepare($SQL);
			$q->execute(array(':email' => $email));
			$data = $q->fetch(PDO::FETCH_ASSOC);
			return $data;
		}

		public function register($values, $fields){
			$inputs = validate($values);
			if ($inputs === true)
				$reg = insert($table, $fields, $values);
				return true;
			else
				return false;
		}

		public function login($identifier, $email, $getpw, $sectionName){
			$checkExist = isExist($identifier, 'dev_user', $email);
			if($checkExist === 'exist')
				$select = getBy_id($identifier, 'dev_user', $email)
				$password = $select['pass_k'];
				$verify = password_verify($getpw, $password);
		        if ($verify)
		        	$_SESSION[$sectionName] = $select['userid'];
		            return "success";
		        else
		        	return "error";
		}

		public function mail($email, $header, $message, $sender){
	    	$mail = mail($email, $header, $message, $sender);
	    	if ($mail) {
	    		return true;
	    	}else{
	    		return false;
	    	}
	    }

	    public function random_char($char){
			$char_length = 15;
			$cl = strlen($char);
			$randomize = '';
			for($i = 0; $i < $char_length; $i++ ){
				$randomize .= $char[rand(0, $cl - 1)]; 
			}
			return $randomize;
		}

	    public function ResetMail($to,$username,$code){
		    //Variable
		    $sender = "FstackPay Password Reset <noreply@fstackpay.io>";
		    $subject = "Password Reset";
		    $msg = '';
		    $msg .= "<div style='background:white; box-shadow: 1px 5px 18px 0px rgba(0,0,0,0.1); padding: 2%; width: 40vw; margin-left: 30%;text-align: center;display: absolute; margin-top: 10%;'>\n";

		    $msg .= "<h5>Hi ". $username ."!</h5>\n\n";
		    $msg .= "You requested a password reset at FstackPay.io\n";
		    $msg .= "Please click or copy the link below to complete the process: \n";
		    $msg .= "<div style='background:cornflowerblue;padding:1.5%; color: white; max-width: 60%;text-align: center;margin:1em; margin-left: 20%;border-radius: 2px;'>";

		    $msg .= "<a href='http://localhost/fstackpay/verify/?action=reset&code=" . $code ."&email=" .$to. "' style='color: white;'>Click here to reset your password</a>";

		    //headers
		    $headers = 'From: '.$sender.'' . "\r\n" .
		    'X-Mailer: PHP/' . phpversion();
		    //sending block
		    $send_mail = mail($to, $subject, $msg, $headers);

		    if($send_mail){
		      return true;
		    }else {
		      return false;
			}
		}

		private static function send_welcome($to, $username, $code){
			$sender = "FstackPay Password Reset <noreply@fstackpay.io>";
		    $subject = "Welcome and account activation";
		    $msg = '';
		    $msg .= "<div style='background:white; box-shadow: 1px 5px 18px 0px rgba(0,0,0,0.1); padding: 2%; width: 40vw; margin-left: 30%;text-align: center;display: absolute; margin-top: 10%;'>\n";
		    $msg .= "<h5>Hi ". $username ."!</h5>\n\n"; 
		    $msg .= "You account was successfully created!\n";
		    $msg .= "But just one more thing...\n";
		    $msg .= "You need to activate your account by verifying your email.\n";
		    $msg .= "Please click the link below to verify your email: \n";
		    $msg .= "<div style='background:cornflowerblue;padding:1.5%; color: white; max-width: 60%;text-align: center;margin:1em; margin-left: 20%;border-radius: 2px;'>";
		    $msg .= "<a href='http://localhost/fstackpay/verify/?action=activate&code=" . $code ."&email=" .$to. "' style='color: white;'>Click here to verify your email</a>";
		    $headers = 'From: '.$sender.'' . "\r\n" .
		    'X-Mailer: PHP/' . phpversion();
		    //sending block
		    $send_mail = mail($to, $subject, $msg, $headers);

		    if($send_mail){
		      return true;
		    }else {
		      return false;
			}
		}

		public function match($val1, $val2){
			if ($val1 === $val2) {
				return true;
			}else{
				return false;
			}
		}

	}		
?>
