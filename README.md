# Proyecto Taller de Autos de Construccion de Software

Este proyecto fue elaborado con diversas tecnologias, como lo son css, html y javascript para crear todo el lado del cliente e interacciones y PHP para el backend y generar las rutas.

Puede consultar el proyecto finalizado dando click aqui => [TALLER DE AUTOS](https://taller-autos.herokuapp.com/)

## Instrucciones:

Para que el proyecto funcione de una manera correcta usted debera tener instaladas las siguientes tecnologias:

1. [PHP](https://www.php.net/downloads) ( version 8 o 7 )
2. [Composer](https://getcomposer.org/) ( que es un administrador de paquetes de PHP )
3. [MySql](https://www.mysql.com/downloads/) (Como base de datos)

Luego en el directorio del proyecto debera ejecutar los siguienes comandos en su terminal:
```
composer install
```
Este comando restaurara la carpeta vendor necesaria para que el autoload de php pueda funcionar.
<br/>
<br/>

Dentro de la carpeta public del proyecto debera ejecutar el comando:

    php -S localhost:8000

Este comando iniciara un servidor de desarrollo de php con el cual podra visualizar el proyecto.

`Recuerde que para que funcione correctamente debera tener la base de datos del proyecto ya configurada, los scripts se encuentran en la carpeta de scrips de este repositorio`.
Para Cambiar el Usuario y Contraseña de la base de datos en el archivo database.php que se encuentra dentro de la carpeta includes.

    $db = mysqli_connect('localhost', <tu usuario>, <tu_Contraseña>, '<nombreDb>');

