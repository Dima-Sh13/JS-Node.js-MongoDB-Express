
// una función básica

function funcionBasica() {
  console.log('función básica se ejecutó');
}

funcionBasica();


// función como declaración, con argumentos y retorno

function suma(a, b) {
  return a + b;
}

console.log(suma(10, 15));


// función como expresión

var multiplica = function (a, b) {
  return a * b;
};

console.log(multiplica(10, 15));


var lang = 'es';

function accesoContexto() {
  console.log('en el contexto superior:', lang);
}

accesoContexto();

console.log('esto pasa');


// método de un objeto

var agente = {
  nombre: 'Smith',
  saluda: function() {
    console.log('Hola, soy el agente ' + this.nombre);
  }
};

agente.saluda();


// constructor de objetos

function Fruta(nombre) {
  this.getNombre = function () {
    return nombre;
  };
  this.setNombre = function (valor) {
    nombre = valor;
  }
}

// crear un objeto fruta
var limon = new Fruta('Citrus limon');

console.log(limon);

console.log(limon.getNombre());

limon.setNombre('Manzana');

console.log(limon.getNombre());

// constructor de objetos 2.0

function Coches(modelo, precio) {
  this.getModelo = function() {
    return modelo;
  };

  this.setModelo = function(value) {
    modelo = value ;

  };
  this.getPrice = () => {
    return precio;
  };

  this.setPrice = (newPrice) => {
    precio = newPrice;
  };


}


let gregorio = new Coches('Peugeout 208 GT', '12000kr')



console.log(gregorio)


console.log(gregorio.getPrice())

console.log(gregorio.getModelo())








