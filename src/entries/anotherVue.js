import Vue from 'vue'
import TestVue from '../components/anotherVue'

new Vue({
  el: '#app',
  render:h => h(TestVue)
})
