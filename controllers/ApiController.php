<?php

namespace Controller;

use Model\Servicio;

class ApiController {

    public static function index() {
        $servicios = Servicio::all();
        echo json_encode($servicios);
    }


}

