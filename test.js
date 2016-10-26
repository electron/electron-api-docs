const test = require('tape')
const apis = require('.')
const tree = require('./tree')

test('electron-api-docs', function (t) {
  t.ok(Array.isArray(apis), 'is an array')
  t.ok(apis.length > 15, 'contains several API objects')
  t.ok(apis.app, 'gives APIs named keys')
  t.ok(apis.map(api => api.name).indexOf('app') < 3, 'sorts APIs by name')
  t.ok(tree.BrowserWindow.instanceMethods.setAspectRatio, 'can be required as an object tree structure')
  t.end()
})
