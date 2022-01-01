const $$navegacion = document.querySelectorAll('.tabs button');
const $$contenedores = document.querySelectorAll('div .seccion');

const tabs = () => {

    $$navegacion.forEach(boton => {
        boton.addEventListener('click', cambiarPagina);
    });
}

const cambiarPagina = e => {
    const boton = e.target;
    const $contenedor = document.querySelector(`#paso-${boton.dataset.paso}`);

    $$contenedores.forEach(contenedor => {
        contenedor.classList.add('ocultar');
    });
    
    $contenedor.classList.remove('ocultar');

    $$navegacion.forEach(boton => boton.classList.remove('active'));
    boton.classList.add('active');
}

// TODO: realizar la paginacion
const paginacion = () => {
    const $anterior = document.querySelector('#anterior');
    const $siguiente = document.querySelector('#siguiente');


    $anterior.addEventListener('click', cambiarPagina);
    // $siguiente.addEventListener('click', cambiarPagina);

}

const iniciarApp = () => {
    //cambiar cuando se presionen los tabs
    tabs();

    //cambiar contenedores con botones de paginacion
    paginacion();
}

document.addEventListener( 'DOMContentLoaded', iniciarApp );
