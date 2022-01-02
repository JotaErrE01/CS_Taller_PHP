const cita = {
    nombreCliente: '',
    email: '',
    fecha: '',
    hora: '',
    servicios: [],
}

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
    $siguiente.addEventListener('click', () => { cambiarPaginaSiguiente(1) });
    $anterior.addEventListener('click', () => { cambiarPaginaSiguiente(-1) });
}

const cambiarPaginaSiguiente = (num) => {
    //Seleccionar la pestaña activa
    const $actual = document.querySelector('button.active');
    const numPagina = parseInt($actual.dataset.paso);

    //verificar si es la ultima pagina
    if (numPagina + num === 0 || numPagina + num === 4) return;
    const $paginaSiguiente = document.querySelector(`[data-paso="${numPagina + num}"]`);
    $paginaSiguiente.classList.add('active');
    $actual.classList.remove('active');
    cambiarContenedor($paginaSiguiente);
}

//imprimir servicios en el html
const imprimirServicios = servicios => {
    servicios.forEach(servicio => {
        const { id, nombre, precio, descripcion } = servicio;

        //creando el html para el nombre del servicio
        const nombreServicio = document.createElement('p');
        nombreServicio.classList.add('nombre-servicio');
        nombreServicio.textContent = nombre;

        //creando el html para el precio del servicio
        const precioServicio = document.createElement('p');
        precioServicio.classList.add('precio-servicio');
        precioServicio.textContent = `$ ${precio}`;

        //creando el html para la descripcion del servicio
        const descripcionServicio = document.createElement('p');
        descripcionServicio.classList.add('descripcion-servicio');
        descripcionServicio.textContent = descripcion;

        //creando el contenedor del servicio
        const servicioDiv = document.createElement('div');
        servicioDiv.classList.add('servicio');
        servicioDiv.dataset.idServicio = id;

        //agregando el html al contenedor del servicio
        servicioDiv.appendChild(nombreServicio);
        servicioDiv.appendChild(precioServicio);
        // servicioDiv.appendChild(descripcionServicio); 

        //agregando el contenedor del servicio al DOM
        document.querySelector('#servicios').appendChild(servicioDiv);
    });
}

const seleccionarServicio = () => {
    const $servicios = document.querySelectorAll('.servicio');
    $servicios.forEach(servicio => {
        servicio.addEventListener('click', () => {
            servicio.classList.toggle('active');

            const id = servicio.dataset.idServicio;
            const nombre = servicio.querySelector('.nombre-servicio').textContent;
            const precio = servicio.querySelector('.precio-servicio').textContent;
            //crear el objeto servicio
            const objServicio = { id, nombre, precio };

            //verificar si el servicio ya esta en el arreglo de servicios
            const existe = cita.servicios.find(servicio => servicio.id === id);
            if (!existe) {
                cita.servicios = [...cita.servicios, objServicio];
            };

            //verificar si el servicio se elimina del arreglo de servicios
            if (!servicio.classList.contains('active')) {
                cita.servicios = cita.servicios.filter(servicio => servicio.id !== id);
            }
        });
    });
}

const consultarServicios = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/servicios');
        const servicios = await response.json();
        imprimirServicios(servicios);
        seleccionarServicio();
    } catch (error) {
        console.log(error);
    }
}

const mostrarAlerta = (mensaje, tipo) => {
    //verificar si ya existe una alerta
    const $alertaPrevia = document.querySelector('.alerta');
    if($alertaPrevia) return;

    //Generar el html de la alerta
    const div = document.createElement('div');
    const p = document.createElement('p');
    div.classList.add('alerta');
    div.classList.add(tipo);
    p.textContent = mensaje;
    div.appendChild(p);
    document.querySelector('.formulario').before(div);

    // Eliminar alerta despues de 3 segundos
    setTimeout(() => {
        div.remove();
    }, 3000);
}

const agregarDatosUsuario = () => {
    const $nombre = document.querySelector('#nombre');
    const $email = document.querySelector('#email');
    const $fecha = document.querySelector('#fecha');
    const $hora = document.querySelector('#hora');

    $nombre.addEventListener('input', () => {
        cita.nombreCliente = $nombre.value;
        console.log(cita);
    });
    $email.addEventListener('input', () => {
        cita.email = $email.value;
    });
    $fecha.addEventListener('input', (e) => {
        const fecha = new Date($fecha.value);
        if(fecha.getDay() === 6){
            e.target.value = '';
            mostrarAlerta('domingo no es un día laboral', 'error');
        }else{
            cita.fecha = $fecha.value;
        };
    });
    $hora.addEventListener('input', () => {
        cita.hora = $hora.value;
    });
}

const iniciarApp = () => {
    //cambiar cuando se presionen los tabs
    tabs();

    //cambiar contenedores con botones de paginacion
    paginacion();

    //consultar servicios de la api
    consultarServicios();

    //agregar los datos del usuario al objeto cita
    agregarDatosUsuario();
}

document.addEventListener('DOMContentLoaded', iniciarApp);
