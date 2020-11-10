import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listPesan: [{
        id: 1,
        makanan: 'Batagor',
        minuman: 'Es teh',
        opsipesan: 'Dibungkus',
        gambar: 'end.jpg'
      },
      {
        id: 2,
        makanan: 'Somay',
        minuman: 'Es Jeruk',
        opsipesan: 'Makan disini',
        gambar: 'end.jpg'
      },
      {
        id: 3,
        makanan: 'Mie Ayam',
        minuman: 'Es Campur',
        opsipesan: 'Dibungkus',
        gambar: 'end.jpg'
      },
    ],
  },
  mutations: {
    tambahPesan(state, pesan) {
      state.listPesan.push(pesan)
    },
    hapusPesan(state, id) {
      state.listPesan = state.listPesan.filter(pesan => pesan.id != id);
    },
    ubahPesan(state, id) {
      // state.listPesan = state.listPesan.filter(pesan => pesan.id != id);
      const elementsIndex = this.state.listPesan.findIndex(pesan => pesan.id == id )
      let newArray = [...this.state.listPesan]
      newArray[elementsIndex] = {...newArray[elementsIndex], completed: !newArray[elementsIndex].completed}
      this.setState({
        listPesan: newArray,
        });
    },
    
  },
  actions: {
    addPesan({ commit }, pesan) {
      commit('tambahPesan', pesan);
    },
    deletePesan({ commit }, id) {
      commit('hapusPesan', id);
    },
    editPesan({commit}, id) {
      commit('ubahPesan', id);
    },
  },
  modules: {},
  getters: {
    daftarPesan(state) {
      return state.listPesan;
    },
  }
});