'use strict'

//vamos a ver que es un DOM-Document Object Model

var caja =document.getElementById("miCaja");

//cambiar el contenido de mi caja

caja.innerHTML="Esta es mi caha desde js";
caja.style.background="blue";
caja.style.padding="20px";
caja.style.color="white";

var todosLosDivs = document.getElementsByTagName('div');
var valor;
for(valor in todosLosDivs){
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todosLosDivs[valor].textContent);
    parrafo.appendChild(texto);
    document.querySelector("#miSection").appendChild(parrafo);   
}

console.log(caja);