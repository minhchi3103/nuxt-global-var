const data = JSON.parse('{"HOST":"shinryak.site"}')

export default ({ app }, inject) => {
  inject('get', (varToGet) => data[String(varToGet)] || '\\not found\\')
}
