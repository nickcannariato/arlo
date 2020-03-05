// This file sets up React's proxy in development mode.
//
// Currently, non-native Node languages (e.g. typescript) are explicitly not supported:
// https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development#configuring-the-proxy-manually
//
/* eslint-disable */
/* istanbul ignore file */
/* tslint:disable */

const proxy = require('http-proxy-middleware')
const target = process.env.ARLO_BACKEND_URL || 'http://localhost:3001/'

module.exports = function(app) {
  app.use(proxy('/auth/**', { target }))
  app.use(proxy('/admin', { target }))
  app.use(proxy('/election/new', { target }))
  app.use(proxy('/election/*/audit/**', { target }))
  app.use(proxy('/election/*/jurisdiction/**', { target }))
  app.use(proxy('/election/*/admin/**', { target }))
  app.use(proxy('/auditboard/*', { target }))
}
