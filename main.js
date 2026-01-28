 let empleado = {
    nombre: "Thomas Anderson",
    profesion: "Developer"
};

let stringp = JSON.stringify(empleado); // esto nos convierte en string el objeto empleado

console.log(stringp)



let textoJSON = '{"nombre":"Thomas Anderson", "profesion":"Developer"}';

let parseado = JSON.parse(textoJSON);

console.log(parseado)


/// Truthy and falsy

// en javascript topdo es verdadero o falso

// los valores que son falsy son los siguientes: falsa, 0, "", null, undefined , NaN(valor especial del tipo numbre que significa Not-a-number)
// los arrays, funciones y los objetos vacios son siempre truthy 
// false, 0 y "" dan true al hacer ==



