'use strict';

var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', function(err) {
    console.log(err);
});

db.connection('open', function() {
    console.info('conectao a mongo db');
});

mongoose.connect('mongodb://localhost/generada');

