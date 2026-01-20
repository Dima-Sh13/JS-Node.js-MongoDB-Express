//definimos un objeto de forma literal

var empleado = {
    nombre:"Thomas Anderson",
    profesion:"Developer",
    edad:30,
    lenguaje:["python","javascript","php"]
};
console.log(empleado)

let serializado = JSON.stringify(empleado)
console.log(serializado)


//des_serializar el objeto  de string a objeto

serializado = serializado + "{";



let leido;

try{
    leido = JSON.parse(serializado);
} catch (err) {
    console.log("no se pudo leer el archivo.");
}


if (typeof leido != "undefined") {
    console.log("hay algo leido");
} else {
    console.log("no hay nada leido")
}


for (var i=0; i < empleado.lenguaje.length; i++) {
    let arma = empleado.lenguaje[i];
    console.log(empleado.nombre + (arma == "php" ? " sabe " : ": " ) + arma);
} 



array = [1,2,3,4,5,6]


for ( let i=0; i < array.length; i++) {
    let numero = array[i]
    console.log((numero == 3 ? "tres" : numero));
 
}

let proposito = true;


// Advanced JAvascript


console.log(console.time())



// FUNCIONES (en node.js usadas normalmente para asincronia)

// en javascript no hace falta pasarle a la funcion todos los parametros que tenga declarados

// en js las funciones son objetos


// CREACION COMO DECLARACION

// requieren nombre, estan posicionadas a nivel de programa o en el cuerpo de otra funcion, se hoistean, tienen acceso al contexto de quien las llama


function suma(numero1, numero2) {
    return numero1 +numero2;
}

console.log(suma(7 + 8))

