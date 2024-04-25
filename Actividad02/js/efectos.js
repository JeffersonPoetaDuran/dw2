$(document).ready(function (){
    // Efecto Menu
    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top': '-150px'
        });
        $(this).animate({
            top: '0'
        }, 1100 + (index * 500))
    });


    // Efecto Header
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


    // Scroll Elementos del menú
    let acercaDe = $('#acerca-de').offset().top,
        menu = $('#platillos').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top,
        inicio = $('#header1').offset().top,
        contactanos = $('#contacto').offset().top;


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


    // Un poco de modificacion aqui
    $('#btn-contactanos').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contactanos
        }, 500)
    });
})


/*                                        Mis modificaciones */

      /*             Formulario + Tabla              */

//      (formulario)
document.addEventListener("DOMContentLoaded", function() {
    // referencias
    const formulario = document.getElementById("formulario-contacto");
    const tablaContactos = document.getElementById("tabla-contactos");
    const btnBorrarTodo = document.querySelector(".borrar-todo");
    const btnLimpiar = document.createElement("button"); // Crear botón Limpiar
    btnLimpiar.textContent = "Limpiar"; // Texto del botón
    btnLimpiar.classList.add("limpiar"); // Agregar clase al botón
    formulario.appendChild(btnLimpiar); // Agregar botón Limpiar al formulario

    // evento envios
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        // obtener los valores del formulario
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;
        const mensaje = document.getElementById("mensaje").value;


        // todos los campos están llenos
        if (nombre && email && telefono && mensaje) {
            // filas
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
            mensajeExito.textContent = "Mensaje enviado con éxito";
            mensajeExito.style.display = "block";

            // Limpiar el formulario después de enviar
            formulario.reset();

            // Opcional: Ocultar el mensaje de éxito después de unos segundos
            setTimeout(function() {
                mensajeExito.style.display = "none";
            }, 3000); // 3 segundos
        } else {
            // Si algún campo está vacío, mostrar un mensaje de error
            alert("Por favor completa todos los campos.");
        }
    });

    // Agregar evento al botón "Borrar Todo"
    btnBorrarTodo.addEventListener("click", function() {
        // Obtener todas las filas de la tabla
        const filas = tablaContactos.querySelectorAll("tbody tr");
        
        // eliminacion de todas las filas
        filas.forEach(function(fila) {
            fila.remove();
        });

        // Mostrar mensaje de que todo funciono
        const mensajeExito = document.getElementById("mensaje-exito");
        mensajeExito.textContent = "Todas las filas han sido borradas";
        mensajeExito.style.display = "block";
    });

    // Agregar evento al botón "Limpiar" para limpiar el formulario
    btnLimpiar.addEventListener("click", function() {
        formulario.reset(); // Limpiar el formulario

        // Mostrar mensaje de éxito
        const mensajeExito = document.getElementById("mensaje-exito");
        mensajeExito.textContent = "Formulario limpiado";
        mensajeExito.style.display = "block";

        // Opcional: Ocultar el mensaje de éxito después de unos segundos
        setTimeout(function() {
            mensajeExito.style.display = "none";
        }, 3000); // 3 segundos
    });

    // tabla y celdas
    tablaContactos.style.borderCollapse = "collapse";
    tablaContactos.style.width = "100%";
    tablaContactos.style.border = "1px solid #ddd";


    const celdas = tablaContactos.querySelectorAll("td, th");
    celdas.forEach(function(celda) {
        celda.style.border = "1px solid #ddd";
        celda.style.padding = "8px";
    });

    // Agregar evento a las filas para cambiar el color de fondo al hacer clic
    const filas = tablaContactos.querySelectorAll("tbody tr");
    filas.forEach(function(fila) {
        fila.addEventListener("click", function() {
            fila.style.backgroundColor = "lightblue";
        });
    });
});

/*      Función para eliminar una fila específica */
function eliminarFila(boton) {
    const fila = boton.closest("tr"); // Obtener la fila actual
    fila.remove(); // Eliminar la fila del DOM

    // Mostrar mensaje de éxito
    const mensajeExito = document.getElementById("mensaje-exito");
    mensajeExito.textContent = "Fila borrada exitosamente";
    mensajeExito.style.display = "block";
}








