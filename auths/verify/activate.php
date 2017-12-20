<?php
	require_once __DIR__ . '/../../platform_api/class/class.php';
	$class = new Fclass_plateform;
	$activation = "YES";
	$do =  $class->insert('dev_user', $fields = array('__activation'), $values = array($activation));
	if ($do === true)
		include './success.php';
	else
		include './error.php';

?>