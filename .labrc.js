'use strict'

module.exports = {
  verbose: true,
  coverage: true,
  reporter: ['console', 'html', 'lcov'],
  output: ['stdout', 'coverage/coverage.html', 'coverage/lcov.info'],
}
