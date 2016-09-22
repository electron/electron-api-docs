const keyedArray = require('keyed-array')
const apis = require('./electron-api.json')
  .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))

module.exports = keyedArray(apis)
