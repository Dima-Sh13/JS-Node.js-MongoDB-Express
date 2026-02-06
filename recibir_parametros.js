// recibimos parametros en la ruta


router.put('/ruta/:id', function(req, res) {
    console.log('params', req.params);
    var id = req.params.id
});


// la ruta podria ser http://localhost:3000/apiv1/anuncios/55


// recibimos parametros en forma de query string


router.put('/ruta', function(req, res) {
    console.log('query-string', req.query);
    var id = req.query.id
});