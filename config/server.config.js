'use strict'

require('dotenv').config()

const ServerConfig = {
  environment: process.env.NODE_ENV || 'development',
  hapi: {
    port: process.env.PORT,
    // The router section controls how incoming request URIs are matched against the routing table. In our AWS
    // environments we see trailing slashes added to the end of paths so this deals with that issue. We also don't want
    // client systems having to worry about what case they use for the endpoint when making a request.
    router: {
      isCaseSensitive: false,
      stripTrailingSlash: true
    }
  }
}

module.exports = { ServerConfig }
