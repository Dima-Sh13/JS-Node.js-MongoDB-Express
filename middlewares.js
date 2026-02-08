// un middleware es un handler que se activa ante unas determinadas peticiones o todas
// antes de realizar la accion principal de una ruta

//podemos usar tantos como nos haga falta

// una aplicacion express es esencialmente una serie de llamadas a middlewares

// ejemploa de middleware (y de respuesta)
router.get('/', function(req, res, next) {   } );

// los middlewares tienen acceso al obejto de la peticion (req)
// a la respuesta (res) y al sigueinte middleware 


//-----------------------------------------------//

// middlewares anivel de aplicacion
// se conectan al objeto instancia de la aplicacion con app.use o app.METHOD

var app = express();

app.use(function(req, res, next) {
    console.log('Time', Date.now());
    next(); // aqui usamos next obligatoriamoente porque no hemos mandado ninguna otra respuesta
            // y eso dejaria la app pillada hasta llegar al timeout    
});

// middlewares a nivel de router. con router.use o router.method

var router = express.Router(); // creamos el router

router.use(function (req, res, next) {
    userModel.find(req.body.userId, function(user) { // buscamos un usuario en la base de datos con user id
        req.user = user;  // y lo guardamos en la peticion para que los siguientes middlewares puedan usarlo
        next(); // lo mismo aqui. no hemos respondido
    });
});


// Middlewares de error. se ponen los ultimos, despues de todas nuestras rutas.
// recibern un error (err) mas un parametro

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send("Something broke");
    // aqui no usamos next porque si que hemos mandado una respuesta en la line de arriba
});


// middlewares built in en express

app.use(express.static('public', options));

// son los proporcionados por los desarolladores de express


// y los middlewares de terceros que son los que podemos instalar con npm
