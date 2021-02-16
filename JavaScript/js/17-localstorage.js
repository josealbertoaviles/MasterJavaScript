'use strict'

//local storage

if(typeof(Storage)!=='undefined'){
    console.log(" EL local storage esta disponible");

}else{
    console.log("No esta disponible");
}

//Guardar datos
localStorage.setItem("titulo","Master en JavaScript");

//Recuperar elemento

console.log(localStorage.getItem("titulo"));

document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

//guardar objetos en local Storage
var usuario = {
    nombre:"jose alberto",
    email: "josealberto@gmail.com"
};

localStorage.setItem("usuario",JSON.stringify(usuario)); //solo se pueden pasar objetos json al local storage si es un string
//y la forma de pasar el objeto a JSON es con JSON.stringify("objeto");

//Recuperar un objeto

var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);

//localStorage.clear();