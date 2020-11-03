<template>
<div id="app">
  <div id="wrapper">
    <Navbar />
    <router-view />
    <Footer />
    <LeftSidebar />
    <RightSidebar />
  </div>
</div>
</template>

<script>
import Navbar from './components/Layout/Navbar.vue'
import LeftSidebar from './components/Layout/LeftSidebar.vue'
import RightSidebar from './components/Layout/RightSidebar.vue'
import Footer from '@/components/Layout/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    LeftSidebar,
    RightSidebar,
    Footer,
  },
};
</script>

<style>
@import './assets/libs/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.css';
@import './assets/libs/flatpickr/flatpickr.min.css';
@import './assets/libs/selectize/css/selectize.bootstrap3.css';
@import './assets/css/bootstrap-purple.min.css';
@import './assets/css/app-purple.min.css';
@import './assets/css/icons.min.css';
</style>
