/**
 * Module Dependencies
 */

var Redis = require('ioredis');

/**
 * Connection.js
 *
 * Handles connecting and disconnecting from a Redis server.
 *
 * @param {Object} config
 * @param {Function} callback
 */

var Connection = module.exports = function(config, cb) {

  var self = this;

  // Ensure something is set for config
  this.config = config || {};

  // Hold the connection
  this.connection = {};

  // Create a new Connection
  this.connect(function(err, client) {
    if(err) return cb(err);
    self.connection = client;
    cb(null, self);
  });

};


///////////////////////////////////////////////////////////////////////////////////////////
/// PUBLIC METHODS
///////////////////////////////////////////////////////////////////////////////////////////


/**
 * Connect to the Redis instance
 *
 * @param {Function} callback
 * @api public
 */

Connection.prototype.connect = function(cb) {
  var client;
  var config = this.config;

  // if we have hosts then assume it's a cluster
  if (config.hosts && config.hosts.length) {
    client = new Redis.Cluster(config.hosts, config);
  } else {
    client = new Redis(config);
  }

  if(config.password != null) {
    client.auth(config.password);
  }

  client.once('ready', function() {
    if(!config.hosts && config.database != null) {
     client.select(config.database);
    }

    cb(null, client);
  });
};
