import Vue from 'vue'
import store from './src/vuex/store'
import App from './src/components/App.vue'

new Vue({
  store, // inject store to all children
  el: 'body',
  components: { App }
})
