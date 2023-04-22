<template>
  <div class="app-info">
    <p class="fs-3 text-uppercase">Barcha kinolar soni: {{ allMovieCount }}</p>
    <p class="fs-4 text-uppercase">Ko'rilgan kinolar soni: {{ favoriteMovieCount }}</p>
  </div>
</template>

<script>
export default {
  name: 'AppInfo',

  props: {
    allMovieCount: {
      type: Number,
      required: true
    },
    
    favoriteMovieCount: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
.app-info {
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>
