<?php

namespace Controller;

use MVC\Router;

class CitaController {
    public static function index( Router $router ) {
        $router->render('client/index', [
            'alertas' => [],
            'script' => '
                <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
                <script src="build/js/app.js"></script>',
        ]);
    }
}