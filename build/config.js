const path = require('path')
const fs = require('fs')
const nodeExternals = require('webpack-node-externals')

const components = fs.readdirSync(path.resolve(__dirname, '../src/amx-ui/src/components'))
const directives = fs.readdirSync(path.resolve(__dirname, '../src/amx-ui/src/directives'))
const helpers = fs.readdirSync(path.resolve(__dirname, '../src/amx-ui/src/helpers'))

let externals = {}

components.forEach(name => {
  externals[`components/${name}`] = `amx-ui/dist/lib/${name}`
})

directives.forEach(name => {
  name = name.substring(0, name.lastIndexOf('.'))
  externals[`directives/${name}`] = `amx-ui/dist/directives/${name}`
})

helpers.forEach(name => {
  name = name.substring(0, name.lastIndexOf('.'))
  externals[`helpers/${name}`] = `amx-ui/dist/helpers/${name}`
})

externals = Object.assign({
  vue: 'vue'
}, externals, nodeExternals())

exports.components = components.reduce((last, curr) => {
  last[`lib/${curr}`] = path.resolve(__dirname, `../src/amx-ui/src/components/${curr}`)
  return last
}, {})
exports.directives = directives.reduce((last, curr) => {
  last[`directives/${curr.substring(0, curr.lastIndexOf('.'))}`] = path.resolve(__dirname, `../src/amx-ui/src/directives/${curr}`)
  return last
}, {})
exports.helpers = helpers.reduce((last, curr) => {
  last[`helpers/${curr.substring(0, curr.lastIndexOf('.'))}`] = path.resolve(__dirname, `../src/amx-ui/src/helpers/${curr}`)
  return last
}, {})
exports.theme = {
  'theme': path.resolve(__dirname, `../src/amx-ui/src/theme/index.js`)
}

exports.externals = externals

exports.alias = {
  'vue$': 'vue/dist/vue.esm.js',
  '@': path.resolve(__dirname, '../src/amx-ui/src'),
  'amx-ui': path.resolve(__dirname, '../src/amx-ui'),
  '@amx-ui': path.resolve(__dirname, 'amx-ui'),
  'components': path.resolve(__dirname, '../src/amx-ui/src/components'),
  'helpers': path.resolve(__dirname, '../src/amx-ui/src/helpers'),
  'dirctives': path.resolve(__dirname, '../src/amx-ui/src/directives')
}
