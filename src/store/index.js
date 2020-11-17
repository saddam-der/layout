import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

var api = "https://c2fc1e3ef947.ngrok.io";

export default new Vuex.Store({
  state: {
    data: [],
    category: [],
    province: [],
    city: [],
    subdistrict: [],
    list: [],
    product: [],
    categoryPro: [],
  },
  mutations: {
    SET_DATA(state, data){
      state.data = data
    },
    SET_CATEGORY(state, category){
      state.category = category
    },
    SET_PROVINCE(state, province){
      state.province = province
    },
    SET_CITY(state, city){
      state.city = city
    },
    SET_SUBDISTRICT(state, subdistrict){
      state.subdistrict = subdistrict
    },
    SET_ADDING(state, data){
      state.data.unshift(data)
    },
    list_account(state , data){
      state.list = data
    },
    register_account(state , data){
        state.list.unshift(data)
    },
    set_product(state, product) {
      state.product = product
    },
    set_category(state, category) {
      state.category = category
    },
    // SET_DELETE(state, id){
    //   state.data = state.data.filter(data => data.id !== id)
    // }
    // newTodo: (state, todo) => state.todos.unshift(todo),
  },
  actions: {
    async loadData({ commit }) {
      axios.get(api+'/disaster?page=1&limit=100').then((response) => {
        // for (var i = 0; i < response.data.data.length; i++) {
        //   response.data.data[i].notes = JSON.parse(response.data.data[i].notes)
        // }
        // for(let message of response.data.data){
        //   console.log(message);
        // }
        commit('SET_DATA', response.data.data)
      })
    },

    async loadCategory({ commit }) {
      axios.get(api+'/disaster/category').then((response) => {
        commit('SET_CATEGORY', response.data.data)
      })
    },
    async loadProvince({ commit }) {
      axios.get(api+'/disaster/province').then((response) => {
        commit('SET_PROVINCE', response.data.data)
      })
    },
    async loadCity({ commit }) {
      axios.get(api+'/disaster/city').then((response) => {
        commit('SET_CITY', response.data.data)
      })
    },
    async loadSubdistrict({ commit }) {
      axios.get(api+'/disaster/subdistrict').then((response) => {
        commit('SET_SUBDISTRICT', response.data.data)
      })
    },

    async addData({commit}, form) {
      axios.post(api+'/disaster/action/add', form).then((response) => {
        commit('SET_ADDING', response.data.data);
      })
    },
    async deleteData({commit}, data) {
      axios.delete(api+'/disaster/' + data.id + '/action/delete').then((response) =>  {
        commit('SET_DATA', response.data.data);
      })
    },

    listAccount({ commit }) {
      axios.get(api+'/user?page=1&limit=100').then((response) => {
        commit('list_account',response.data.data)
      })
    },
    register({commit} , form){
      axios.post(api+'/user/action/add', form).then(response => {
        commit('register_account' , response.data.data);
     })
    },
    async deleteAccount({ commit }, data) {
      axios.delete(api+'/user/' + data.id + '/action/delete').then((response) => {
       commit('list_account', response.data.data)
     })
    },
    loadProduct({ commit }) {
      axios.get(api+'/product?page=1&limit=10').then((response) => {
        for (var i = 0; i < response.data.data.length; i++) {
          response.data.data[i].image = JSON.parse(response.data.data[i].image)
        }
        commit('set_product', response.data.data)
        })
    },
    loadProductByID({ commit }, data) {
      axios.get(api + '/product/' + data.id).then((response) => {
        for (var i = 0; i < response.data.data.length; i++) {
          response.data.data[i].image = JSON.parse(response.data.data[i].image)
        }
        commit('set_product', response.data.data)
        })
    },
    loadCategoryProduct({ commit }) {
      axios.get(api + '/product/category').then(response => {
      commit('set_category', response.data.data)
      })
    },
    async addProduct({ commit }, data) {
      axios.post(api+'/product/action/add', {
                name: data.productName,
                image: '{\"img1\":\"' + data.productImage + '\"}',
                description: data.productDescription,
                amount: data.productAmount,
                qty: data.productQty,
                minimum: data.productMinimum,
                category_id: data.productCategory,
                condition: data.productCondition,
                method: data.productMethod,
                user_id: 4
            }).then((response) => {
                this.$swal('Success', 'You successfully added this data', 'success');
                commit('set_product', response.data.data)
            }).catch(err => {
                console.log(err);
            })
    },
    async deleteProduct({ commit }, data) {
      axios.delete(api+'/product/' + data.id + '/action/delete').then((response) => {  
      commit('set_product', response.data.data)
      })
    },
    
  },
  modules: {},
  getters: {

  }
});