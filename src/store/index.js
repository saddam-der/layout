import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [],
    category: []
  },
  mutations: {
    SET_DATA(state, data){
      state.data = data
    },
    SET_CATEGORY(state, category){
      state.category = category
    }
  },
  actions: {
    loadData({ commit }) {
      axios.get('https://c2fc1e3ef947.ngrok.io/disaster?page=1&limit=100').then((response) => {
        for (var i = 0; i < response.data.data.length; i++) {
          response.data.data[i].notes = JSON.parse(response.data.data[i].notes)
        }
        commit('SET_DATA', response.data.data)
      })
    },

    loadCategory({ commit }) {
      axios.get('https://c2fc1e3ef947.ngrok.io/disaster/category').then((response) => {
        commit('SET_CATEGORY', response.data.data)
      })
    }
  },
  modules: {},
  getters: {

  }
});