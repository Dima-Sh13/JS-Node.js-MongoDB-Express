// todo esto se ejecuta en nodemon en  tiempo real
// comando: nodemon (nombreArchivo)

var numero = 1
console.log(numero)
console.log(typeof(numero));

numero = "hello"
console.log(typeof(numero));

// string

console.log("texto de prueba".split(" ")) // esto devuelve array

var textoLargo = 
    "linea1\n" +
    "linea2\n"

console.log(textoLargo);


var objeto = {
    numero: 1,
    texto: "hola",
    sumaDos: function (v) {
        return v + 2;
    }

};

console.log(objeto.numero);
console.log(objeto.texto);
console.log(objeto.sumaDos(2));


//arrays

var array = [
    1,
    "hola",
    function(v) {return v+2},
    {valor: "hola"}

];

console.log(array);
console.log(array[0]);
console.log(array[2](3));

// hoisting

var x = 100;

function y() {
    if (x == 20) {
        var x = 30;
    }
    return x;
}

console.log(x, y());

console.log(x,y());

let array3 = [1,2,3,4,];


console.log(array3[2]);


/// operadores y control de flujo

// practicamente igual que en elos demas lenguajes

// control de flujo

// tambien igual que en los demas lenguajes, debemos acordadrnos de
// escribir los {}

// or en javascript se representa || 
// and se representa &&
// igual que ne python la ngacion o contratio se representa con ! 
// delante de la variable


// para poner if como expresion

var nombre = unaVariable ? primeraExpresion : segundaExpresion;


// aqui se asigne a nombre si una variable es verdadeo se asigna a nombre primeraExpresion
// si es falso se asignaria segunda.

var nombreCoche = CaretPosition.name ? car.name : "";

// swith 
switch (expresion) {
    case 1:
        statements_1
        //[break;]
    case 2 :
        statements_2
        //[break;]
    default:
        statements_def
        //[break;]        
} // los brakes son muy importantes ya que si no ejecuta todos los casos


