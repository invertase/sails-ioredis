![image_squidhome@2x.png](http://i.imgur.com/RIvu9.png)

# Redis Sails/Waterline Adapter - With Sentinel Support (ioredis)
[![Build Status](https://travis-ci.org/Salakar/sails-ioredis.svg?branch=master)](https://travis-ci.org/Salakar/sails-ioredis)
[![npm version](https://badge.fury.io/js/sails-ioredis.svg)](http://badge.fury.io/js/sails-ioredis)
[![Dependency Status](https://david-dm.org/Salakar/sails-ioredis.svg)](https://david-dm.org/Salakar/sails-ioredis)

A Sails/Waterline adapter for Redis. May be used in a [Sails](https://github.com/balderdashy/sails) app or anything using Waterline for the ORM.

This `waterline-redis` stores indexes of unique attributes for *relatively* fast lookups. Collections with multiple unique constraints will create multiple index sets.


## Install

Install is through NPM.

```bash
$ npm install sails-ioredis
```

Set your connection adapter on sails / waterline to 'sails-ioredis'

## Configuration

The following connection configuration is available:

```javascript
// default values inline
config: {
  port: 6379,
  host: 'localhost',
  password: null,
  db: null,
  // sentinels: [{ host: 'host1', port: 26379 },{ host: 'host2', port: 26379 }, ...]  // array of sentinel servers
  // name: 'master' // name of the sentinel master 
};
```

#### Low-Level Configuration (for redis driver)

See options at: https://github.com/luin/ioredis

## FAQ

See `FAQ.md`.



## Contribute

See `CONTRIBUTING.md`.


## MIT License

See `LICENSE.md`.
