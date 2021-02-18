<template>
  <div>
    <h1>Events</h1>
    <event-card v-for="(event,index) in events" :key="index" :event="event" :data-index="index"/>
  </div>
</template>

<script>
import EventCard from '../components/EventCard.vue';
export default {
    head() {
      return{
        title:'Event listing'
      }
    },
    asyncData({$axios,error}){
      return $axios.get('http://localhost:3000/events').then(response=>{
        return{
          events:response.data,
        }
      }).catch(e=>{
        error({statusCode:503,message:'Unable to fetch events at this time, please try again.'});
      })
    },
    components:{
      EventCard,
    }
}
</script>