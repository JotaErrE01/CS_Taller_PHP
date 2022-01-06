<?php

namespace Controller;

use MVC\Router;

class AdminController {

    public static function index( Router $router ) {
        session_start();

        //verificar si ha iniciado sesion
        if( !isset($_SESSION['logged_in']) ){
            header('Location: /login');
        }

        $router->render('admin/index', [
            'nombre' => $_SESSION['nombre'] ?? ''
        ]);
    }

}

