import fs from 'fs'
import path from 'path'
const jsText = `

export default ({ app }, inject) => {
  inject('get', (varToGet) => data[String(varToGet)] || '\\\\not found\\\\')
}
`
export default function(moduleOptions) {
  const data =
    "const data = JSON.parse('" + JSON.stringify(moduleOptions.data) + "')"
  fs.writeFileSync(path.join(__dirname, '/plugins/main.js'), data + jsText)
  this.addPlugin(path.join(__dirname, '/plugins/main.js'))
}
