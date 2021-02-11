import Vue from "vue";
import Vuex from "vuex";
import EventService from "../services/EventServices";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user:{
      id:'123',name:'Ali Veli'
    },
    categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community'],
    events: [],
    eventsTotal: 0,
    event: {}
    },
  mutations: {
    ADD_EVENTS(state,event){
      state.events.push(event);
    },
    SET_EVENTS(state,event){
      state.events=event;
    },
    SET_EVENTS_TOTAL(state,eventsTotal){
      state.eventsTotal=eventsTotal;
    },
    SET_EVENT(state,event){
      state.event=event
    }
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit('ADD_EVENT', event)
      })
    },
    fetchEvents({ commit }, { perPage, page }) {
      EventService.getEvents(perPage, page)
        .then(response => {
          commit(
            'SET_EVENTS_TOTAL',
            parseInt(response.headers['x-total-count'])
          )
          commit('SET_EVENTS', response.data)
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    },
    fetchEvent({ commit, getters }, id) {
      var event = getters.getEventById(id)

      if (event) {
        commit('SET_EVENT', event)
      } else {
        EventService.getEvent(id)
          .then(response => {
            commit('SET_EVENT', response.data)
          })
          .catch(error => {
            console.log('There was an error:', error.response)
          })
      }
    }
  },
  getters:{
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  },
  modules: {
  }
})