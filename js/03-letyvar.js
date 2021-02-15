'use strict'
//Pruebas con let y var

//prueba con var
var numero = 40;//valor40
console.log(numero);

if(true){
    var numero = 50;
    console.log(numero);//valor50
}
console.log(numero);//valor50

//prueba cob let

//var es una variable global
//let es una variable local

var texto = "curso JS";
console.log(texto);//valor JS
if(true){
    let texto = "estoy con let";
    console.log(texto);//valor let
}
console.log(texto);//valor js