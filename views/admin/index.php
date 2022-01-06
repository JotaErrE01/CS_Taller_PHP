<h1 class="nombre-pagina">Panel de Administracion</h1>

<div class="barra">
    <p>Hola: <?php echo $nombre ?? ''; ?></p>
    
    <a class="boton" href="/logout">Cerrar Sesion</a>
</div>

<h2>Buscar Citas</h2>
<div class="busquedad">
    <form action="" class="formulario">
        <label for="fecha">Fecha</label>
        <input 
            type="date"
            id="fecha"
            name="fecha"
        >
    </form>
</div>

<div id="citas-admin"></div>

