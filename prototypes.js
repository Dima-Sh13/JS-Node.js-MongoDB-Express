// ejemplos de prototipo

function Persona(name) {
    this.name = name;
}

Persona.prototype.saluda = function() {
    console.log("Hola mundo, me llamo " + nombre);

};

// todas los objetos de persona van a tener la funcion de saludar
// incluso las que ya estan creadas
