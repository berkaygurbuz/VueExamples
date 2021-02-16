import Vue from "vue";
import VueRouter from "vue-router";
import EventCreate from "../views/EventCreate.vue";
import EventList from "../views/EventList.vue";
import EventShow from "../views/EventShow.vue";
import NProgress from 'nprogress';
import store from '../store/index.js';
import NotFound from '../views/NotFound.vue';
import NetworkIssue from '../views/NetworkIssue.vue';



Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventList,
      props:true,
    },
    {
      path: '/event/create',
      name: 'event-create',
      component: EventCreate
    },
    {
      path: '/event/:id',
      name: 'event-show',
      component: EventShow,
      props: true,
      beforeEnter(routeTo, routeFrom, next) {
        store.dispatch('event/fetchEvent', routeTo.params.id)
        .then(event => {
          routeTo.params.event = event
          next()
        }).catch(error => {
          if (error.response && error.response.status == 404) {
            next({ name: '404', params: { resource: 'event' } })
          } else {
            next({ name: 'network-issue' })
          }
        })
      }
    },
    {
      path:'/404',
      name:'404',
      component:NotFound,
      props:true,
    },
    {
      path:'*', //catch all not-found route
      redirect:{name:'404',params:{resource:'page'}},
    },
    {
      path: '/network-issue',
      name: 'network-issue',
      component: NetworkIssue,
    }
  ]
})

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router