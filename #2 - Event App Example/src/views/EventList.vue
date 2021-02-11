<template>
    <div>
        <h1>Event Listing</h1>

  <template>
      <div>
        <EventCard v-for="event in events" :key="event.id" :event="event"/>
        <template v-if="page != 1">
          <router-link :to="{ name: 'event-list', query: { page: page - 1 } }" rel="prev">Prev Page</router-link> | 
        </template>
        <router-link :to="{ name: 'event-list', query: { page: page + 1 } }">Next Page</router-link>
      </div>
    </template>
    </div>
</template>

<script>
import EventCard from '../components/EventCard.vue';
import {mapState} from 'vuex';

export default {

    components: {
    EventCard
  },
  created() {
    this.perPage = 3 

    this.$store.dispatch('fetchEvents', {
      perPage: this.perPage,
      page: this.page
    })
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    hasNextPage() {
      return this.eventsTotal > this.page * this.perPage
    },
    ...mapState(['events', 'eventsTotal'])
  }
}
</script>