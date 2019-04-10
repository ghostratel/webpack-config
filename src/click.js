import _ from 'lodash'
import $ from 'jquery'

import './index2.scss'
const handleClick = () => {
  var div = document.createElement('div')
  div.innerHTML = _.join(['hello', 'world'], ' ')
  document.body.append(div)
  $(div).css('color', 'red')
}

export default handleClick
