const fs = require('fs')
const path = require('path')
const argv = process.argv
const debug = require('debug')('Generator')

const type = argv[2]
const filename = argv[3]

debug('Generating', filename, 'and its test file.')

const blueprint = path.resolve(`blueprints/${type}.js`)
const testBlueprint = path.resolve(`blueprints/test/${type}.js`)

switch (type) {
  case 'component':
    fs.mkdirSync(`${type}s/${filename}`)

    debug('Writing', filename, 'to its directory...')

    fs.createReadStream(blueprint)
      .pipe(fs.createWriteStream(`${type}s/${filename}/index.js`))
    fs.createReadStream(testBlueprint)
      .pipe(fs.createWriteStream(`${type}s/__tests__/${filename}.test.js`))
    break
}

debug('Done!')
