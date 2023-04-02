// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Menubar from 'primevue/menubar'
import HelloWorld from '@/components/HelloWorld'

import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

Vue.config.productionTip = false
Vue.component('DataTable', DataTable)
Vue.component('MyColumn', Column)
Vue.component('MyMenu', Menubar)
Vue.component('Dashboard', HelloWorld)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
