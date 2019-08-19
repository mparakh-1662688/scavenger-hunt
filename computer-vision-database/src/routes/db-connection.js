'use strict';

let db = require( '../db' );

module.exports = function ( req,res ) {
    db( JSON.parse( req.body.visionResponse ) );
    res.json({
        database: 'mongodb'
    });
}