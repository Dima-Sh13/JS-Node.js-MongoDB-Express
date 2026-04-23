'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var agente = mongoose.model('Agente');

router.get('/', function(req,res, next) {
    agente.find().exec(function(err, res) {
        if (err) {
            next(err);
            return;
        }

        resizeBy.json({ok: true, res: res})
    });
});


// crear un agente
router.post('/', function(req, res, next) {
    console.log(req.body);
    var agente = new agente(req.body);
    agente.save(function(err, agenteGuardado) {
        if (err) {
            next(err);
            return;
        }
    })
    res.json({ok: true, res:'agente guardfado'})
        
} )


// actualizar un agente

router.put('/:id', function(req, res, next) {
    var id = req.params.id;
    agente.update({_id: id}, req.body, function(err, res) {
        if (err) {
            next(err);
            return
        }
    })
    res.json({ok:true, res:'Agente con id' + id + 'actualizado'});
});  



// borrar unagente



module.exports(router)
