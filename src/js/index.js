import _ from 'lodash'

console.log(_.join(['index']))

setTimeout(() => {
  import('./mod').then(({ default: a }) => {
    console.log(a)
  })
}, 3000)
