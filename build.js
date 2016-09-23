const path = require('path')
const fs = require('fs')
const packageJSON = require('./package.json')
const latest = require('gh-latest-release')
const pify = require('pify')
const nugget = pify(require('nugget'))
var version
var url

latest('electron/electron')
  .then(download)
  .then(updatePackageJSON)

function download (release) {
  version = release.tag_name.replace('v', '')
  url = `https://github.com/electron/electron/releases/download/v${version}/electron-api.json`
  return nugget(url, {dir: __dirname})
}

function updatePackageJSON () {
  packageJSON.version = version

  fs.writeFileSync(
    path.join(__dirname, 'package.json'),
    JSON.stringify(packageJSON, null, 2) + '\n'
  )
}
