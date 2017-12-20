<!DOCTYPE html>
<html>
<head>
	<title>reset password</title>
</head>
<body>
	<?php 
		$mail = $_GET['email'];
	?>
	<form action="action/reset.php" method="POST">
		<input type="text" name="email" disabled value="<?php echo $mail;?>">
		<input type="password" name="pass1" placeholder="enter password">
		<input type="password" name="pass2" placeholder="Reenter password">
	</form>
</body>
</html>