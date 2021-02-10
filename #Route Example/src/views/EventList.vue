<template>
    <div>
        <h1>Event Listing</h1>

        <EventCard v-for="event in events" :key="event.id" :event="event" />
        <BaseIcon/>
    </div>
</template>

<script>
import EventCard from '../components/EventCard.vue';
import EventService from '../services/EventServices.js';

export default {

    components:{
        EventCard
    },    
    data(){
        return{
            events:[],
        }
    },
    created(){
        EventService.getEvents()
        .then(response=>{
            console.log(response.data);
            this.events=response.data
        })
        .catch(error=>{
            console.log("There was an errors"+error.response);
        })
    }
}
</script>