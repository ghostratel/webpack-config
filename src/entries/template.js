import header from '@/template/header.art'

const root = document.getElementById('root')

root.innerHTML = header({ name: 'foo' })
