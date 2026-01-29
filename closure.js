"use strict";

function creaSumador (valor) {
    return function(valor2) {
        return valor + valor2;
    }
}


var suma5 = creaSumador(1);

console.log(suma5(5));

console.log(suma5(20))

// MORE closure

function creaAgente(nombre) {
    var edad = 0;
    return {
        ponNombre: function (nuevoNombre) {
            nombre = nuevoNombre;
        },
        leerNombre: function() {
            return nombre;
        },
        ponEdad: function(nuevaEdad) {
            edad = nuevaEdad;
        },
        leerEdad: function() {
            return edad;
        }
    }
}


