'use strict'
var boton = document.querySelector('#boton');
function cambiarColor(){
    console.log("me has dado click");
    var bg= boton.style.background;
    
    if(bg == "blue"){
        boton.style.background="green";
    }else{
        boton.style.background="blue";
    }
    boton.style.padding = "10px";
    boton.style.border ="1px solid #ccc";
    return true;
}
//Mouse click
boton.addEventListener('click',function(){
    cambiarColor();
});

//Mouse over
boton.addEventListener('mouseover',function(){
    boton.style.background = "yellow";
});

//Mouseout
boton.addEventListener('mouseout', function(){
    boton.style.background = "#ccc";
});

//Focus
var input = document.querySelector("#campo_nombre");
input.addEventListener('focus',function(){
    console.log("estas haciendo foco en el input");
});
//Blur

input.addEventListener('blur',function(){
    console.log("[blur]estas fuera del input");
});
//Keydown
input.addEventListener('keydown',function(event){
    console.log("estas pulsando esta tecla", String.fromCharCode(event.keyCode));
});

//keyPress

//Keyup