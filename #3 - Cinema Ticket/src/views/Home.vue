<template>
  <div class="home">
    
   <h3>This is a home page</h3>
  </div>

  
</template>

<script>


export default {
  data(){
    return {}
  },
  created(){
    this.$store.dispatch('fetchMovies');
  },
}
</script>
