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

// CREACION COMO EXPRESION

// tienen acceso al contexto, al ser expresiones se pueden declarar en cualquier sitio donde pueda ir un valor
// no hacen hoisting, solo se pueden usar despues de su definicion
// pueden tener nombre pero solo es visible dentro de ella

let suma1 = function (numero1, numero2) {
    return numero1 + numero2;  // en este ejemplo la variable suma1 si hace hoisting pero la funcion dentro de ella no
}


// CREACION CON EL CREADOR DE FUNCIONES

// no tienen acceso a donde se han creado pero si al global
let creadorFunciones = new Function("numero1 + numero2");


x = 10;
function func() {
    let y = 30;
    let bar = new Function("alert(x); alert(y);");
    bar();
}

// aqui vemos que bar si puede acceder a x que esta fuera pero no a y.


var calculadora = {
    suma: function(a,b) { return a + b},
    resta: function(a,b) {return a-b}
}

// creacion de instancias y objetos

// cuando se usa new al invocar una funcion, se comporta como un creador de objetos
