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

/*                                        Mis modificaciones */
/*             Formulario + Tabla*/

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencias a los elementos del DOM
    const formulario = document.getElementById("formulario-contacto");
    const tablaContactos = document.getElementById("tabla-contactos");
    const btnBorrarTodo = document.querySelector(".borrar-todo");

    // Agregar evento al formulario para manejar el envío
    formulario.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        // Obtener los valores del formulario
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;
        const mensaje = document.getElementById("mensaje").value;

        // Construir una nueva fila para la tabla con los datos del formulario
        const fila = `
            <tr>
                <td>${nombre}</td>
                <td>${email}</td>
                <td>${telefono}</td>
                <td>${mensaje}</td>
                <td><button class="borrar-fila" onclick="eliminarFila(this)">Borrar</button></td>
            </tr>
        `;

        // Insertar la nueva fila en la tabla
        tablaContactos.querySelector("tbody").insertAdjacentHTML("beforeend", fila);

        // Mostrar mensaje de éxito
        const mensajeExito = document.getElementById("mensaje-exito");
        mensajeExito.style.display = "block";

        // Limpiar el formulario después de enviar
        formulario.reset();

        // Opcional: Ocultar el mensaje de éxito después de unos segundos
        setTimeout(function() {
            mensajeExito.style.display = "none";
        }, 3000); // 3 segundos
    });

    // Agregar evento al botón "Borrar Todo"
    btnBorrarTodo.addEventListener("click", function() {
        // Eliminar todas las filas de la tabla
        const tbody = tablaContactos.querySelector("tbody");
        tbody.innerHTML = ""; // Vaciar el contenido del tbody
    });

    // Aplicar estilos a la tabla
    tablaContactos.style.borderCollapse = "collapse";
    tablaContactos.style.width = "100%";
    tablaContactos.style.border = "1px solid #ddd";

    // Aplicar estilos a las celdas de la tabla
    const celdas = tablaContactos.querySelectorAll("td, th");
    celdas.forEach(function(celda) {
        celda.style.border = "1px solid #ddd";
        celda.style.padding = "8px";
    });
});

/*      Función para eliminar una fila específica */
function eliminarFila(boton) {
    const fila = boton.closest("tr"); // Obtener la fila actual
    fila.remove(); // Eliminar la fila del DOM
}

