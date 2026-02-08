'use strict';

var express = require('express');
var router = express.Router();

router.use(function(req, res,next) {
    console.log('middleware de router clientes');
    /*
    res.send('respuesta');
    next();
     esto daria error pero no en este middleware si no en el siguiente que tenga un send.
    que no podr responder poerque ya se ha respondido aqui. para evitarlo */
    if (condicion) {
        res.send('respuesta')
        return; // no debemos olvidar el return para que el coddigo de la funcion no siga ejecutandose.
                // tambien valdria un else
                // pero en javascript es mucho mas comun este tipo de estructura
    }
    next(); 
});


router.get('/', function(req, res, next) {
    console.log(req.query);
    res.send('respuesta query de clientes')
});


router.get('/:id', function(req, res, next) {
    console.log(req.params);
    res.send("recibido parametro id" + req.params.id);
});

router.post('/', function(req, res, next) {
    console.log(req.body);
    res.json({recibido: req.body.num});
});


module.exports = router;