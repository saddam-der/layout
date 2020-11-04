// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueApexCharts from 'vue-apexcharts'
import Raphael from 'raphael/raphael'
import VueVectorMap from 'vuevectormap'
global.Raphael = Raphael


Vue.component('apexchart', VueApexCharts)

// Import your preferred map
require('jsvectormap/dist/maps/world')

Vue.use(VueApexCharts)
Vue.use(VueVectorMap)

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
  components: { App },
  template: '<App/>',
});
