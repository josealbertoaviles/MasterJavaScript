'use strict'
//switch
var edad = 24;
var imprime = "";

switch (edad) {
    case 18:
        imprime = "Acabas de cumplir la mayoria de edad";
        break;
    case 40:
        imprime = "Crisis de los 40";
        break;
    case 75:
        imprime = "anciano";
        break;
    case 18 < edad < 25:
        imprime = "Estas en la Flor de la vida";
        break;    
}

console.log(imprime);
