var numeros = new Array(6);

for (var i = 0; i <= 5; i++) {
    numeros[i] = parseInt(prompt("Introduce un número: ", 0));
}
//Funcion mostrar Array
function mostrarArray(numeros, texto = "") {
    document.write("<h1> Elementos del Array " + texto + "</h1>");
    document.write("<ul>");
    numeros.forEach((elemento, indice) => {
        document.write("<li>" + elemento + "</li>");
        console.log(indice + " - " + elemento);
    });
    document.write("</ul>");
}

//mostrar array
mostrarArray(numeros,"");

//mostrar array ordenados
var numOrdenados = numeros.sort();
mostrarArray(numOrdenados, " ordenados");

//mostrar array revertidos
var numInvertidos = numeros.reverse();
mostrarArray(numInvertidos," revertidos");


