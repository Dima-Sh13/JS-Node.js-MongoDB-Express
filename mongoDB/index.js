'use strict';

var client = require('mongodb').MongoClient;

client.connect('mongodb://localhost:27017/express',
function(err,db) {
    if (err) {
        return process.exit();
    }
    db.collection('agentes').find({}).toArray(function(err, docs){
        if (err) throw err;
        console.dir(docs);
        db.close();
    })
}
)