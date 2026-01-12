 let empleado = {
    nombre: "Thomas Anderson",
    profesion: "Developer"
};

let stringp = JSON.stringify(empleado); // esto nos convierte en string el objeto empleado

console.log(stringp)



let textoJSON = '{"nombre":"Thomas Anderson", "profesion":"Developer"}';

let parseado = JSON.parse(textoJSON);

console.log(parseado)