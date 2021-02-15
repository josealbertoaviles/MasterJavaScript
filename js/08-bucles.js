'use strict'
//bucles

//bucle for
var numero = 100;

for(var i = 0; i<=numero;i++){
    console.log("Vamos por el numero: "+i+" del for");
}
//Bucle While
var j = 0;
while(j!=numero+1){
    console.log("Vamos por el numero: "+j+" del while");
    j++;
}

//bucle do While

var years = 30;
do{
    alert("SOLO CUANDO SEA DIFERENTE A 20");
    years--;    
}while(years>25)