# Proyecto Taller de Autos de Construccion de Software

Este proyecto fue elaborado con diversas tecnologias, como lo son css, html y javascript para crear todo el lado del cliente e interacciones y PHP para el backend y generar las rutas.
## Instrucciones:

Para que el proyecto funcione de una manera correcta usted debera tener instaladas las siguientes tecnologias:

1. [PHP](https://www.php.net/downloads) ( version 8 o 7 )
2. [Nodejs](https://nodejs.org/en/download/)
3. [Composer](https://getcomposer.org/) ( que es un administrador de paquetes de PHP )
4. [MySql](https://www.mysql.com/downloads/) (Como base de datos)

Luego en el directorio del proyecto debera ejecutar los siguienes comandos en su terminal:

    npm install

Este comando reconstruira los modulos de node necesarios para ejecutar el siguiente comando.


    npm run gulp

Este generara el build de produccion.
<br/>
<br/>

Lugo debera ejecutar el comando:
```
composer install
```
Este comando restaurara la carpeta vendor necesaria para que el autoload de php pueda funcionar.
<br/>
<br/>

Finalmente dentro de la carpeta public del proyecto debera ejecutar el comando:

    php -S localhost:8080

Este comando iniciara un servidor de desarrollo de php con el cual podra visualizar el proyecto.

`Recuerde que para que funcione correctamente debera tener la base de datos del proyecto ya configurada, los scripts se encuentran en la carpeta de scrips de este repositorio`.

### Nota (opcional):
Si es de su agrado o conocimiento puede realizar la descarga de php, node y apache de uno de los siguientes contenedores de aplicaciones:

* [Laragon](https://laragon.org/download/)
* [XAMP](https://www.apachefriends.org/es/index.html)

