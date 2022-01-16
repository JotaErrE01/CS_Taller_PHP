<?php

$db;
try {

    $db = mysqli_connect('bbcqvbjfufufhfhz3fwg-mysql.services.clever-cloud.com', 'utyohlj0zqsje2sx', 'gyZdu4BbTbYINhe4re1C', 'bbcqvbjfufufhfhz3fwg');

    // $db = mysqli_connect($_ENV["DB_HOST"], $_ENV["DB_USER"], $_ENV["DB_PASS"], $_ENV["DB_NAME"]);
    if(!$db) {
        throw new Exception('No se pudo conectar a la base de datos');
    }
} catch (Throwable $th) {
    echo $th;
    echo "Error: No se pudo conectar a MySQL.";
    echo "errno de depuración: " . mysqli_connect_errno();
    echo "error de depuración: " . mysqli_connect_error();
    exit;
}
