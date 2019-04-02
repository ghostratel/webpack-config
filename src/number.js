function number () {
  var div = document.createElement('div')
  div.setAttribute('id', 'number')
  div.innerHTML = '2000'
  div.addEventListener('click', function(){
    div.innerHTML = parseInt(div.innerText, 10) + 1
  })
  document.body.append(div)
}

export default number