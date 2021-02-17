$(document).ready(function () {
    //eventos

    //mouseover
    var caja = $("#caja");
    /*
    caja.mouseover(function(){
        $(this).css("background", "red");
    });

    caja.mouseout(function(){
        $(this).css("background","chartreuse");
    });
*/
    //hover

    function cambiaAzul() {
        $(this).css("background", "blue");
    };

    function cambiaVerde() {
        $(this).css("background", "chartreuse");
    };


    caja.hover(cambiaAzul, cambiaVerde);

    //CLick, doble click

    caja.click(function () {
        $(this).css("background", "red");
    });
    caja.dblclick(function () {
        $(this).css("background", "pink");
    });

    //focus y blur
    var formulario = $("#nombre");
    var datos = $('#datos');
    var sigueme = $('#sigueme');
    formulario.focus(function () {
        $(this).css("border", "2px solid green")
    });

    formulario.blur(function(){
        console.log("Estoy fuera");
        $(this).css("border", "5px dashed pink");    
        datos.text($(this).val()).show();
    });

    //Mousedown mouseup
    datos.mousedown(function(){
        $(this).css("background","red");
    });
    datos.mouseup(function(){
        $(this).css("background","blue");
    });

    $(document).mousemove(function(){
        $('body').css("cursor", "none");
        sigueme.css("left",event.clientX)
               .css("top",event.clientY);
    });

});