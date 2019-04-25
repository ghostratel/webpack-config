import _ from 'lodash'
import '../scss/in.scss'
import d from './bigFile.js'

console.log(_.join(['index']))

setTimeout(() => {
  import('./asyncMod').then(({ default: a }) => {
    console.log(a, d[0])
  })
}, 3000)
