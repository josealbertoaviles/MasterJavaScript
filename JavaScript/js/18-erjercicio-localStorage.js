'use strict'

var formulario = document.querySelector("#formpeliculas");

formulario.addEventListener('submit', function () {
    var titulo = document.querySelector('#addpelicula').value;
    if(titulo.length >=1){
        localStorage.setItem(titulo, titulo);
    }
    
});
var ul = document.querySelector('#peliculasList');
for(var i in localStorage){

    if(typeof localStorage[i]== 'string'){
        var li = document.createElement("li");
        li.append(localStorage[i]);  
        ul.append(li);
    }
      
}
var formulario = document.querySelector("#formbpeliculas");

formulario.addEventListener('submit', function () {
    var titulo = document.querySelector('#removepelicula').value;
    if(titulo.length >=1){
        localStorage.removeItem(titulo, titulo);
    }
    
});