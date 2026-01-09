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



