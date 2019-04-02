function counter () {
  var div = document.createElement('div')
  div.setAttribute('id', 'counter')
  div.innerHTML = '1'
  div.addEventListener('click', function(){
    div.innerHTML = parseInt(div.innerText, 10) + 1
  })
  document.body.append(div)
}

export default counter