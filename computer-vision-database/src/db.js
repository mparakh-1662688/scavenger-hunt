'use strict'

let mongoose = require('mongoose');
let compute = require('../models/computer-vision');
let { MONGO_DB_SERVER, MONGO_DB_NAME } = require('./config')

mongoose.connect(`mongodb://${ MONGO_DB_SERVER }/${ MONGO_DB_NAME }`, {useNewUrlParser: true});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we\'re connected!');
});

module.exports = function ( response ) {
    let tagsObtained;
    let captionsObtained;
    let confidenceObtained;
    if ( typeof response.description !== "undefined" ) {
        tagsObtained = response.description.tags;
    }
    if ( typeof response.description.captions[0] !== "undefined" ) {
        captionsObtained = response.description.captions[0].text;
        confidenceObtained = response.description.captions[0].confidence;
    }
    let document = new compute( {tags: tagsObtained, captions: captionsObtained, confidence: confidenceObtained} );
    document.save(function ( err, document ) {
        if ( err ) return console.error( err );
    })
    let introduction = document.details();
    console.log( introduction );
}

