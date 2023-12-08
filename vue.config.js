const { defineConfig } = require('@vue/cli-service')

console.log(process.env.NODE_ENV, '环境')
let envName = process.env.NODE_ENV
let config = {}
switch (envName) {
  case 'developtest':
    config = require('./config/developTest.config');
    break
  case 'development':
    config = require('./config/development.config')
}

module.exports = defineConfig(config)

