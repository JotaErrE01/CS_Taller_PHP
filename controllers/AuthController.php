<?php

namespace Controller;

use Model\Usuario;
use MVC\Router;

class AuthController {

    public static function login( Router $router ) {
        $alertas = [];
        $method = $_SERVER['REQUEST_METHOD'];

        if( $method === 'POST' ){
            $auth = new Usuario($_POST);
            $alertas = $auth->validarLogin();

            if(empty($alertas)){
                // Comprobra que el usuario existe
                $usuario = Usuario::where('email', $auth->email);
                if($usuario){
                    //verificar password
                    $usuarioVerificado = $usuario->comprobarPassword( $_POST['password'] );

                    if($usuarioVerificado){

                        //TODO: CONFIRMAR USUARIO

                        // autenticar usuario
                        session_start();

                        $_SESSION['uid'] = $usuario->id;
                        $_SESSION['nombre'] = $usuario->nombre;
                        $_SESSION['email'] = $usuario->email;
                        $_SESSION['role'] = $usuarioVerificado;
                        $_SESSION['logged_in'] = true;

                        
                        // Iniciar Session
                        // debuguear($usuario);
                        // $_SESSION['usuario'] = $usuario;
                        header('Location: /'. $usuarioVerificado);
                    }

                }else{
                    Usuario::setAlerta( 'error', 'Usuario no encontrado' );
                }

                // debuguear($usuario);
            }
        }

        $alertas = Usuario::getAlertas();

        $router->render('auth/login', [
            'title' => 'Login',
            'alertas' => $alertas
        ]);
    }

    public static function logout() {
        session_start();
        $_SESSION = [];
        header('Location: /login');
    }

    public static function recuperar( Router $router ) {
        echo 'recuperar';
    }

    public static function olvide( Router $router ) {
        $router->render('auth/olvide-password', []);
    }

    public static function crear( Router $router ) {

        $method = $_SERVER['REQUEST_METHOD'];
        if( $method === 'POST' ){
            echo 'formulario enviado';
        }else{
            $router->render('auth/crear-cuenta', [
                'title' => 'Crear Cuenta',
            ]);
        }

    }

}
