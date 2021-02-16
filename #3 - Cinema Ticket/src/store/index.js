import Vue from "vue";
import Vuex from "vuex";
import service from "../services/service.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies:[],
  },
  mutations: {},
  actions: {
    fetchMovies(){
      service.fetchMovies().then(res=>{
        console.log(res.val());
      })
    }
  },
  getters:{},
  modules: {}
});
