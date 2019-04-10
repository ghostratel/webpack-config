import axios from 'axios'

axios.get('/react/api/header.json').then(res => {
  console.log(res)
})
axios.get('/react/api/demo.json').then(res => {
  console.log(res)
})
