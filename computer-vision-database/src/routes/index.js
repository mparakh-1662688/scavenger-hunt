'use strict'

const router = require('express').Router();
const health = require('./health');
const bodyParser = require( 'body-parser' );
const dbConnection = require('./db-connection');

router.get( '/api/health' , health );
router.post( '/api/db', bodyParser.json(), dbConnection);

module.exports = router;
