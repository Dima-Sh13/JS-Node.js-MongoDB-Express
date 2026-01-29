"use strict";

// ejemplos de prototipo

function Persona(name) {
    this.name = name;
}

Persona.prototype.saluda = function() {
    console.log("Hola mundo, me llamo " + nombre);

};

// todas los objetos de persona van a tener la funcion de saludar
// incluso las que ya estan creadas


// example de prototype


function Persona(nombre) {
    this.name = nombre;
}

var persona = new Persona('Neo');

Persona.prototype.saluda = function() {
    console.log('Hola mi nombre es ' + this.name);
}


console.log(persona.name);
persona.saluda();


// Herencia de Persona


function Agente(nombre) {
    Persona.call(this, nombre);
    //esto ejecuta el constructor de persona con el this de agente
    //definiendo en el this de agente una propiedad name
    //y asignandole el parametro recibido
    
}

// le asignamos como prototipo una persona

Agente.prototype = new Persona('soy un prototipo')

var agente = new Agente('Smith');

agente.saluda();

console.log(
    Object.getPrototypeOf(agente),
    agente instanceof Agente,
    agente instanceof Persona,
    agente instanceof Object
);