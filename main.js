const fs = require('fs')
const path = require('path')
const jsText = `

export default ({ app }, inject) => {
  inject('get', (varToGet) => data[String(varToGet)] || '\\\\not found\\\\')
}
`
export default function SimpleModule(moduleOptions) {
  const data =
    "const data = JSON.parse('" + JSON.stringify(moduleOptions.data) + "')"
  fs.writeFileSync(path.join(__dirname, '/plugins/main.js'), data + jsText)
  this.addPlugin(path.join(__dirname, '/plugins/main.js'))
}
