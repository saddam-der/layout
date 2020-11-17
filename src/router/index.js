import Vue from 'vue';
import Router from 'vue-router';
//----------------------------Navigation--------------------------
import Dashboard1 from '@/components/navigation/dashboard/dashboard-1';
import Dashboard2 from '@/components/navigation/dashboard/dashboard-2';
import Dashboard3 from '@/components/navigation/dashboard/dashboard-3';
import Dashboard4 from '@/components/navigation/dashboard/dashboard-4';

//Disaster
import disasterList from '@/components/bencana/disaster-list';
import disasterAdd from '@/components/bencana/disaster-add';
import disasterEdit from '@/components/bencana/disaster-edit';

//Product
import productList from '@/components/product/product-list';
import productAdd from '@/components/product/product-add';
import productEdit from '@/components/product/product-edit'

//User
import register from '@/components/User/Register';
import account from '@/components/User/account';
import account_edit from '@/components/User/Account_edit';

Vue.use(Router);

export default new Router({
  routes: [

    //---------------Navigation---------
    //Product
    {
      path: '/product',
      name: 'productList',
      components: {
        default: productList,
      }
    },
    {
      path: '/product/add',
      name: 'productAdd',
      components: {
        default: productAdd,
      }
    },
    {
      path: '/product/edit/:id',
      name: 'productEdit',
      components: {
        default: productEdit,
      }
    },
    {
      path: '/disaster',
      name: 'disasterList',
      components: {
        default: disasterList,
      }
    },
    {
      path: '/disaster/add',
      name: 'disasterAdd',
      components: {
        default: disasterAdd,
      }
    },
    {
      path: '/disaster/edit/:id',
      name: 'disasterEdit',
      components: {
        default: disasterEdit,
      }
    },
    {
      path: '/Register',
      name: 'Register',
      components: {
        default: register,
      }
    },
    {
      path: '/account',
      name: 'account',
      components: {
        default: account,
      }
    },
    {
      path: '/account/edit/:id',
      name: 'account_edit',
      components: {
        default: account_edit,
      }
    },                  
    {
      path: '/',
      name: 'Dashboard-1',
      components: {
        default: Dashboard1,
      }
    },
    {
      path: '/dashboard-2',
      name: 'Dashboard2',
      components: {
        default: Dashboard2,
      }
    },
    {
      path: '/dashboard-3',
      name: 'Dashboard3',
      components: {
        default: Dashboard3,
      }
    },
    {
      path: '/dashboard-4',
      name: 'Dashboard4',
      components: {
        default: Dashboard4,
      }
    },
  ],
});
