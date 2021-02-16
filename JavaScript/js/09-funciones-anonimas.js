'use strict'

//una funcion anonima es una funcion que no tiene nombre

var pelicula = function (nombre) {
    return "La pelicula es: " + nombre;
}

//callback: funcion que esta dentro de otra y que no tiene nombre
// esta funcion se pasa por parametro

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {
    var sumar = numero1 + numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
}
sumame(5, 7, function (dato) {
    console.log("la suma es: ", dato);
},
    function (dato) {
        console.log("La suma por dos es: ", (dato * 2));
    });