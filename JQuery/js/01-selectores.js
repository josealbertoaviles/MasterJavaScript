$(document).ready(function () {
    //Selector id

    var rojo = $("#rojo").css("background", "red")
        .css("color", "white");

    var rojo = $("#verde").css("background", "green")
        .css("color", "white");
    var rojo = $("#amarillo").css("background", "yellow")
        .css("color", "black");

    var mi_clase = $('.zebra').css("padding", "5px");

    $('.sin_bordes').click(function () {
        console.log("Click dado");
        $(this).removeClass("sin_bordes");
        $(this).addClass("zebra");
    });
    var parrafos = $('p');
    parrafos.click(function () {
        $(this).removeClass("zebra");
        $(this).addClass("sin_bordes");
    });
});