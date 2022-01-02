const $$navegacion = document.querySelectorAll('.tabs button');
const $$contenedores = document.querySelectorAll('div .seccion');

const tabs = () => {
    $$navegacion.forEach(boton => {
        boton.addEventListener('click', cambiarTab);
    });
}

const cambiarTab = e => {
    //Seleccionar la pestaña activa
    const $actual = document.querySelector('button.active');
    const tab = e.target;
    $actual.classList.remove('active');
    tab.classList.add('active');
    const paginaSiguiente = tab;

    cambiarContenedor(paginaSiguiente);
}

const cambiarContenedor = (pagina) => {
    const $contenedor = document.querySelector(`#paso-${pagina.dataset.paso}`);
    $$contenedores.forEach(contenedor => {
        contenedor.classList.add('ocultar');
    });
    $contenedor.classList.remove('ocultar');
}

const paginacion = () => {
    const $anterior = document.querySelector('#anterior');
    const $siguiente = document.querySelector('#siguiente');

    // $anterior.addEventListener('click', cambiarPagina);
    $siguiente.addEventListener('click', () => {cambiarPaginaSiguiente(1)});
    $anterior.addEventListener('click', () => {cambiarPaginaSiguiente(-1)});
}

const cambiarPaginaSiguiente = (num) => {
    //Seleccionar la pestaña activa
    const $actual = document.querySelector('button.active');
    const numPagina = parseInt($actual.dataset.paso);

    //verificar si es la ultima pagina
    if(numPagina + num === 0  || numPagina + num === 4) return;
    const $paginaSiguiente = document.querySelector(`[data-paso="${numPagina + num}"]`);
    $paginaSiguiente.classList.add('active');
    $actual.classList.remove('active');
    cambiarContenedor($paginaSiguiente);
}

const iniciarApp = () => {
    //cambiar cuando se presionen los tabs
    tabs();

    //cambiar contenedores con botones de paginacion
    paginacion();
}

document.addEventListener('DOMContentLoaded', iniciarApp);
