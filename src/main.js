import Vue from 'vue'
import App from './App.vue'
import store from './store'
import '@/assets/css/tailwind.css'
import Toasted from 'vue-toasted'
import { supabase } from '@/utils'

Vue.use(Toasted)

Vue.config.productionTip = false

Vue.prototype.$supabase = supabase

new Vue({
  store,
  render: function (h) {
    return h(App)
  },
}).$mount('#app')
