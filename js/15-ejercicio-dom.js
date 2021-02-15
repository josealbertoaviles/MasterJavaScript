'use strict'

window.addEventListener('load', function () {
    console.log("DOM Cargado");

    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    formulario.addEventListener('submit', function () {
        console.log("Evento Submit capturado");
        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellidos").value;
        var edad = parseInt(document.querySelector("#edad").value);

        if (nombre.trim() == null || apellido.trim().length == 0) {

            alert("Campo Nombre incompleto...");
            return false;
        }
        if (apellido.trim() == null || apellido.trim().length == 0) {
            alert("Campo Apellidos incompleto...");
            return false;
        }
        if (edad == null || edad >= 0 || !isNaN(edad)) {
            alert("Campo Edad incompleto...");
            return false;
        }


        box_dashed.style.display = "block";
        console.log(nombre, apellido, edad);

        var p_nombre = document.querySelector("#p_nombre");
        var p_apellidos = document.querySelector("#p_apellidos");
        var p_edad = document.querySelector("#p_edad");
        p_nombre.append(nombre);
        p_apellidos.append(apellido);
        p_edad.append(edad);


        /* var datosUsuario = [nombre, apellido, edad];
        for (var indice in datosUsuario) {
            var parrafo = document.createElement("p");
            parrafo.append
            parrafo.append(datosUsuario[indice]);
            box_dashed.append(parrafo);
        }
       */

    })
});