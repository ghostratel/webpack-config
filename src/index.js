// import './index.scss'

// var btn = document.createElement('button')
// btn.innerText = 'click'
// document.body.appendChild(btn)

// btn.addEventListener('click', function(){
//   var div = document.createElement('div')
//   div.innerHTML = 'item'
//   document.body.append(div)
// })

import counter from './counter'
counter()
import number from './number'
number()

if(module.hot) {
  module.hot.accept('./number.js', () => {
    var number = document.getElementById('number')
    document.body.removeChild(number)
    number()
  })
}