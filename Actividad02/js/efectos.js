$(document).ready(function (){
    //Efecto Menu
    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top': '-150px'
        });
        $(this).animate({
            top: '0'
        }, 1100 + (index * 500))
    });

    //Efecto Header
    if( $(window).width() > 1076 ){
        $('header .textos').css({
            opacity: 0,
            marginTop: 0
        });

        $('header .textos').animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1500);
    }

    //scroll Elementos menu
    let acercaDe = $('#acerca-de').offset().top,
        menu = $('#platillos').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top,
        inicio = $('#header1').offset().top;

        /*             Mi boton de navegacion         */
        contactanos = $('#contacto').offset().top; /*Modificado aqui */



    $('#btn-acerca-de').on('click', function local(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDe-300
        }, 500)
        
    });

    $('#btn-menu').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu
        }, 500)
        
    });

    $('#btn-galeria').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria
        }, 500)
        
    });

    $('#btn-ubicacion').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubicacion
        }, 500)
        
    });

    $('#btn-inicio').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: inicio
        }, 500)
        
    });

    /*          Modificacion aqui   */
    
    /*                 Boton ir a contactos                */
    $('#btn-contactanos').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contactanos
        }, 500)
    });

    /*          Modificacion fin   */
    
    
})

/*               Modificaciones en el Formulario y Tabla de Contactos */

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencias a los elementos del DOM
    const formulario = document.getElementById("formulario-contacto");
    const tablaContactos = document.getElementById("tabla-contactos");
    const btnBorrarTodo = document.querySelector(".borrar-todo");
    const mensajeExito = document.getElementById("mensaje-exito");
    const btnGuardarLocalStorage = document.getElementById("btn-guardar-localstorage");
    const btnCargarLocalStorage = document.getElementById("btn-cargar-localstorage");

    // Agregar evento al formulario para manejar el envío
    formulario.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        // Obtener los valores del formulario
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;
        const mensaje = document.getElementById("mensaje").value;

        // Validar si todos los campos están llenos
        if (nombre && email && telefono && mensaje) {
            // Construir una nueva fila para la tabla con los datos del formulario
            const fila = construirFilaTabla(nombre, email, telefono, mensaje);

            // Insertar la nueva fila en la tabla
            insertarFilaEnTabla(tablaContactos, fila);

            // Mostrar mensaje de éxito
            mostrarMensaje("Mensaje enviado con éxito", "success");

            // Limpiar el formulario después de enviar
            resetearFormulario(formulario);
        } else {
            // Si algún campo está vacío, mostrar un mensaje de error
            mostrarMensaje("Por favor completa todos los campos", "error");
        }
    });

    // Agregar evento al botón "Borrar Todo"
    btnBorrarTodo.addEventListener("click", function() {
        // Eliminar todas las filas de la tabla
        eliminarTodasLasFilas(tablaContactos);

        // Mostrar mensaje de éxito
        mostrarMensaje("Todas las filas han sido borradas", "success");
    });

    // Agregar evento al botón "Guardar en Local Storage"
    btnGuardarLocalStorage.addEventListener("click", function() {
        guardarDatosEnLocalStorage(tablaContactos);

        // Mostrar mensaje de éxito
        mostrarMensaje("Datos guardados en Local Storage", "success");
    });

    // Agregar evento al botón "Cargar desde Local Storage"
    btnCargarLocalStorage.addEventListener("click", function() {
        cargarDatosDesdeLocalStorage(tablaContactos);

        // Mostrar mensaje de éxito
        mostrarMensaje("Datos cargados desde Local Storage", "success");
    });
});

/*      Función para construir una fila de la tabla con los datos del formulario */
function construirFilaTabla(nombre, email, telefono, mensaje) {
    return `
        <tr>
            <td>${nombre}</td>
            <td>${email}</td>
            <td>${telefono}</td>
            <td>${mensaje}</td>
            <td><button class="borrar-fila" onclick="eliminarFila(this)">Borrar</button></td>
        </tr>
    `;
}

/*      Función para insertar una fila en la tabla */
function insertarFilaEnTabla(tabla, filaHTML) {
    tabla.querySelector("tbody").insertAdjacentHTML("beforeend", filaHTML);
}

/*      Función para resetear el formulario */
function resetearFormulario(formulario) {
    formulario.reset();
}

/*      Función para eliminar todas las filas de la tabla */
function eliminarTodasLasFilas(tabla) {
    tabla.querySelector("tbody").innerHTML = "";
}

/*      Función para guardar los datos en Local Storage */
function guardarDatosEnLocalStorage(tabla) {
    const filas = tabla.querySelectorAll("tbody tr");
    const data = [];
    filas.forEach(function(fila) {
        const contacto = {
            nombre: fila.cells[0].textContent,
            email: fila.cells[1].textContent,
            telefono: fila.cells[2].textContent,
            mensaje: fila.cells[3].textContent
        };
        data.push(contacto);
    });
    localStorage.setItem("contactos", JSON.stringify(data));
}

/*      Función para cargar los datos desde Local Storage */
function cargarDatosDesdeLocalStorage(tabla) {
    const data = JSON.parse(localStorage.getItem("contactos"));
    if (data) {
        tabla.querySelector("tbody").innerHTML = ""; // Vaciar tabla
        data.forEach(function(contacto) {
            const fila = construirFilaTabla(contacto.nombre, contacto.email, contacto.telefono, contacto.mensaje);
            insertarFilaEnTabla(tabla, fila);
        });
    }
}

/*      Función para eliminar una fila específica */
function eliminarFila(boton) {
    const fila = boton.closest("tr"); // Obtener la fila actual
    fila.remove(); // Eliminar la fila del DOM

    // Mostrar mensaje de éxito
    mostrarMensaje("Fila borrada exitosamente", "success");
}

/*      Función para mostrar mensajes */
function mostrarMensaje(mensaje, tipo) {
    mensajeExito.textContent = mensaje;
    mensajeExito.className = tipo;
    mensajeExito.style.display = "block";
}
