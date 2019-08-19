'use strict'

module.exports = {
    "NODE_CLUSTER" : process.env.NODE_CLUSTER || 'false',
    "MONGO_DB_SERVER" : process.env.MONGO_DB_SERVER || "",
    "MONGO_DB_NAME" : process.env.MONGO_DB_NAME || "",
}