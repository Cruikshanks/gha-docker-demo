'use strict'

const Hapi = require('@hapi/hapi')

const VersionInfoPlugin = require('./plugins/version_info.plugin')

const { ServerConfig } = require('../config/server.config')

const server = Hapi.server(ServerConfig.hapi)

server.route({
  method: 'GET',
  path: '/',
  handler: function (req, h) {
    console.log(`Endpoint hit: ${req.route.path}`)

    return h.response({ message: 'pong' }).code(200)
  }
})

exports.init = async () => {
  await server.register(VersionInfoPlugin)
  await server.initialize()
  return server
}

exports.start = async () => {
  await this.init()
  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
  return server
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})
