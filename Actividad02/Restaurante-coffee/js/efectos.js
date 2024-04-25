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

document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formulario-contacto");
    const tablaContactos = document.getElementById("tabla-contactos");
    const btnBorrarTodo = document.querySelector(".borrar-todo");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;
        const mensaje = document.getElementById("mensaje").value;

        
        const fila = `
            <tr>
                <td>${nombre}</td>
                <td>${email}</td>
                <td>${telefono}</td>
                <td>${mensaje}</td>
                <td><button class="borrar-fila" onclick="eliminarFila(this)">Borrar</button></td>
            </tr>
        `;

        // fila nueva
        tablaContactos.querySelector("tbody").insertAdjacentHTML("beforeend", fila);


        const mensajeExito = document.getElementById("mensaje-exito");
        mensajeExito.style.display = "block";

        // Limpiar el formulario
        formulario.reset();

        
        setTimeout(function() {
            mensajeExito.style.display = "none";
        }, 3000); // 3 seg.
    });

    // boton borrar todo
    btnBorrarTodo.addEventListener("click", function() {
        console.log("Evento de borrar todo activado");
        const tbody = tablaContactos.querySelector("tbody");
        console.log(tbody);
        tbody.innerHTML = "";
    });
});
  /*      boton borrar fila */
function eliminarFila(boton) {
    const fila = boton.closest("tr");
    fila.remove();
}


