<?php

namespace Controller;

use MVC\Router;

class ServicioController {

    public static function index( Router $router ) {
        $router->render('client/index', [
            'title' => 'Servicios',
            'alertas' => [],
            'script' => '<script src="build/js/app.js"></script>'
        ]);
    }

}