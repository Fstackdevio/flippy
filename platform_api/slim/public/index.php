<?php
if (PHP_SAPI == 'cli-server') {
    // To help the built-in PHP dev server, check if the request was actually for
    // something which should probably be served as a static file
    $url  = parse_url($_SERVER['REQUEST_URI']);
    $file = __DIR__ . $url['path'];
    if (is_file($file)) {
        return false;
    }
}

require __DIR__ . '/../vendor/autoload.php';

session_start();

// Instantiate the app
$settings = require __DIR__ . '/../src/settings.php';
$app = new \Slim\App($settings);

// iohandler
$handler = require __DIR__ . '/../../class/class.php';
// $handler = new IOhandler;

// Set up dependencies
require __DIR__ . '/../src/dependencies.php';

// Register middleware
require __DIR__ . '/../src/middleware.php';

//login route 
require __DIR__ . '/../src/auth.php';

// accept datas
require __DIR__ . '/../src/acceptPay.php';

// Run app
$app->run();
$class = new Fclass_plateform;
