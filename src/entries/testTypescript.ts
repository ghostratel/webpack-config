import {randomNumber} from '../modules/tsModule'
import hello from '../modules/test.js'

for(let i = 0; i < 100; i++) {
  console.log(randomNumber(0, 1))
  hello()
}


Promise.resolve()
