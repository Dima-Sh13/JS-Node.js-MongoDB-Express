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


module.exports(router)
