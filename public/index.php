<?php 

require_once __DIR__ . '/../includes/app.php';

use Controller\AuthController;
use Controller\AdminController;
use Controller\ServicioController;
use MVC\Router;

$router = new Router();

// Iniciar Session
$router->get('/login', [ AuthController::class, 'login' ]);
$router->post('/login', [ AuthController::class, 'login' ]);

//Cerrar Sesion
$router->get('/logout', [ AuthController::class, 'logout' ]);
$router->post('/logout', [ AuthController::class, 'logout' ]);

//Recuperar Contraseña
$router->get('/olvide', [ AuthController::class, 'olvide' ]);
$router->post('/olvide', [ AuthController::class, 'olvide' ]);
$router->get('/recuperar', [ AuthController::class, 'recuperar' ]);
$router->post('/recuperar', [ AuthController::class, 'recuperar' ]);

// ? Crear Cuenta?
//Crear Cuenta
// $router->get('/crear-cuenta', [ AuthController::class, 'crear' ]);
// $router->post('/crear-cuenta', [ AuthController::class, 'crear' ]);

//pagina de admin
$router->get('/admin', [ AdminController::class, 'index' ]);
$router->post('/admin', [ AdminController::class, 'index' ]);

// pagina principal para los clientes
$router->get('/', [ ServicioController::class, 'index' ]);


// Comprueba y valida las rutas, que existan y les asigna las funciones del Controlador
$router->comprobarRutas();