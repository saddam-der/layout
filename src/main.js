// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from "./store";
import VueApexCharts from 'vue-apexcharts'
import Raphael from 'raphael/raphael'
import VueVectorMap from 'vuevectormap'
import VModal from 'vue-js-modal'
import VueGoodTablePlugin from 'vue-good-table';
import { BootstrapVue } from 'bootstrap-vue'
import vSelect from 'vue-select'
import CKEditor from '@ckeditor/ckeditor5-vue';
import VueSweetalert2 from 'vue-sweetalert2';
import { Datetime } from 'vue-datetime';
import * as VueGoogleMaps from 'vue2-google-maps'

global.Raphael = Raphael

require('jsvectormap/dist/maps/world')

Vue.component('v-select', vSelect)
Vue.component('apexchart', VueApexCharts)
Vue.component('datetime', Datetime);

Vue.use(VueSweetalert2);
Vue.use(BootstrapVue)
Vue.use(VModal)
Vue.use(VueApexCharts)
Vue.use(VueVectorMap)
Vue.use(VueGoodTablePlugin)
Vue.use( CKEditor );

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB1YSaYcGqU_IUTotXfnUUBKigSKFBt9_E'
  }
})

import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-good-table/dist/vue-good-table.css'
import 'vue-select/dist/vue-select.css';
// You can set defaults globally
Vue.use(VueVectorMap, {
  map: 'world',
  backgroundColor: 'orange',
  // And so on..
  // check the jsvectormap repo to get all configurations options..
})

Vue.use(VueApexCharts)
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
