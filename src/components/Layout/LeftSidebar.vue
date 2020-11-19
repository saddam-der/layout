rr
<template>
  <!-- ========== Left Sidebar Start ========== -->
  <div class="left-side-menu">
    <div class="h-100" data-simplebar>
      <!-- User box -->
      <div class="user-box text-center">
        <img
          src="../../assets/images/users/user-1.jpg"
          alt="user-img"
          title="Mat Helme"
          class="rounded-circle avatar-md"
        />
        <div class="dropdown">
          <a
            href="javascript: void(0);"
            class="text-dark dropdown-toggle h5 mt-2 mb-1 d-block"
            data-toggle="dropdown"
            >Geneva Kennedy</a
          >
          <div class="dropdown-menu user-pro-dropdown">
            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item notify-item">
              <i class="fe-user mr-1"></i>
              <span>My Account</span>
            </a>

            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item notify-item">
              <i class="fe-settings mr-1"></i>
              <span>Settings</span>
            </a>

            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item notify-item">
              <i class="fe-lock mr-1"></i>
              <span>Lock Screen</span>
            </a>

            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item notify-item">
              <i class="fe-log-out mr-1"></i>
              <span>Logout</span>
            </a>
          </div>
        </div>
        <p class="text-muted">Admin Head</p>
      </div>

      <!--- Sidemenu -->
      <div id="sidebar-menu">
        <ul id="side-menu">
          <li class="menu-title">Navigation</li>

          <li>
            <a href="#sidebarDashboards" data-toggle="collapse">
              <i class="mdi mdi-view-dashboard-outline"></i>
              <span class="badge badge-info badge-pill float-right">4</span>
              <span> Dashboards </span>
            </a>
            <div class="collapse" id="sidebarDashboards">
              <ul class="nav-second-level">
                <li>
                  <router-link to="/">Dashboard 1</router-link>
                </li>
                <li>
                  <router-link to="/dashboard-2">Dashboard 2</router-link>
                </li>
                <li>
                  <router-link to="/dashboard-3">Dashboard 3</router-link>
                </li>
                <li>
                  <router-link to="/dashboard-4">Dashboard 4</router-link>
                </li>
              </ul>
            </div>
          </li>
          <li class="menu-title mt-2">Apps</li>
          <li>
            <a href="#sidebarProduct" data-toggle="collapse">
              <i class="mdi mdi-cart-outline"></i>
              <span> Product </span>
              <span class="menu-arrow"></span>
            </a>
            <div class="collapse" id="sidebarProduct">
              <ul class="nav-second-level">
                <li>
                  <router-link to="/product">List</router-link>
                </li>
                <li>
                  <router-link to="/product/add">Add Product</router-link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#sidebarBencana" data-toggle="collapse">
              <i class="mdi mdi-terrain"></i>
              <span> Bencana </span>
              <span class="menu-arrow"></span>
            </a>
            <div class="collapse" id="sidebarBencana">
              <ul class="nav-second-level">
                <li>
                  <router-link to="/disaster">List</router-link>
                </li>
                <li>
                  <router-link to="/disaster/add">Add Disaster</router-link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#sidebarExpages" data-toggle="collapse">
              <i class="mdi mdi-account"></i>
              <span> Users </span>
              <span class="menu-arrow"></span>
            </a>
            <div class="collapse" id="sidebarExpages">
              <ul class="nav-second-level">
                <li>
                  <router-link to="/register">Register Account</router-link>
                </li>
                <li>
                  <router-link to="/account">List Account</router-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <!-- End Sidebar -->

      <div class="clearfix"></div>
    </div>
    <!-- Sidebar -left -->
  </div>
  <!-- Left Sidebar End -->
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: [],
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style></style>
