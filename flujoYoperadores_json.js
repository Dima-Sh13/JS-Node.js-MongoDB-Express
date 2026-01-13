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


let desserie = JSON.parse(serializado)
console.log(desserie)