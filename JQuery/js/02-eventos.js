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

    function cambiaAzul(){
        $(this).css("background", "blue");
    };

    function cambiaVerde(){
        $(this).css("background","chartreuse");
    };


    caja.hover(cambiaAzul,cambiaVerde);

    //CLick, doble click

    caja.click(function(){
        $(this).css("background","red");
    });
    caja.dblclick(function(){
        $(this).css("background","pink");
    });
});