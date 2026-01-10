// dynamic types
var number = 1;
console.log(typeof(number)); // number

number = "hello";
console.log(typeof(number)); // string

// undefined: significa que una variable no esta definida o nunca ha tenido un valor

// todo lo demas son objetos


// ALGUNOS METODOS

"texto de prueba".split(" ") // ["texto", "de", "prueba"]
// los tipos primitivos no tienn metodos aunque parezca que si

// examples:

var objetoString = new String("follow"); // esto crea un objeto de tipo string

typeof(objetoString); // "object"

console.log(objetoString); // esto nos devuelve un dic con las posiciones de las letras 0:"f", 1:"o"


var texto = "follow the white rabbit";  // string 
texto.substring(11,5) // white
typeof(texto); // string

// se suele usar el tipo primitivo


// En javascript no se puede escribir como multilinea

var longText = "line1\n" +
"line2";
// o haciendo un array y luego .join en el retorno de carro

var textoLargo = ["linea1",
    "linea2"
].join("\n")


////////// OBJECT AND ARRAYS

var objeto = {
    numero: 1,
    texto: "hola",
    esCero: function(v){return v == 0}
}

objeto.esCero(0); // True
objeto.texto; // "hola"
objeto["texto"]; // "hola"


// recorriedno las propiedades de un objeto

for (var propietyName in objeto) {
    if (objeto.hasOwnProperty(propietyName)) {
        console.log("la propiedad" + propietyName + "existe con el valor" + objeto[propietyName]);

    }
}

/// en los arrays en js podemos meter los objetos del tipo que queramos, como en python

var array1 = new Array(5)
var array2 = new Array(1,2,3,4,5)

// metodos de array

array1.push(5); // añade 5 al final del array y nos devuelve el length
array1.unshift(0); // añade 0 al final del arrya y nos devulve el lenght
array1.pop();// elimina el ultimo item y lo devuelve
array1.shift(); // elimina el primero y lo devuelve

array1.join(","); // devuelve el string de los elementos y los une por la ","


// iteacion de arrays

for (var i = 0; i < array2.length; i++) {
    var elemento = array2[i];         /// se usa var o tambien let
    console.log(elemento);
}

rows.forEach(function(row) {
    console.log(row);         /// aqui definimos una funcion que se ejecuta sobre cada elemento del array
});


/// HOISTING
