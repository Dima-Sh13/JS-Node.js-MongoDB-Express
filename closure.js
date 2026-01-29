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
        },
        escribe: function() {
            console.log("soy " + nombre + " " + "y tengo " + edad)
        }
    }
}

// creador de agentes creado


var smith = creaAgente('Smith');
smith.ponEdad(35);

var Jonhson = creaAgente("jonshon");
Jonhson.ponEdad(56);

console.log(smith.leerEdad());

console.log(Jonhson.leerNombre());


setTimeout(smith.escribe, 5000);

