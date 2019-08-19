'use strict'

// check for environment, if not, assume dev
if( process.env.NODE_ENV === 'development' ) {
  // require .env configuration
  require('dotenv').config();
}

//require config after env
const config = require('./src/config');

// require application
if( config.NODE_CLUSTER === "true"){
  require('./src/app').cluster();
}else{
  require('./src/app').singleton();
}
