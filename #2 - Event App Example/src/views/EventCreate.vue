<template>
    <div>
        <h1>Create Event : {{ user.name}}</h1>
        <p>This event was created by {{user.id}}</p>
        <p>{{getEventsById(3)}}</p>
        <p>There are {{categoryLength}} categories</p>
        <ul>
            <li v-for="category in categories" :key="category">
                {{category}}
            </li>
        </ul>
    </div>
</template>

<script>
import {mapGetters, mapState} from "vuex";

export default {
    computed:{
        ...mapGetters(['categoryLength','getEventsById']),
        ...mapState(['user','categories'])

    }
}
</script>

<style scoped>

</style>