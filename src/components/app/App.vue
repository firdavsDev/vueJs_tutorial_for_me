<template>
  <div class="app">
    <div class="content">

      <AppInfo />

      <!-- searching  -->
      <div class="searching">
        <SearchPanel />
        <AppFilter />
      </div>
      <MovieList />
      <AddMovie />
    </div>
  </div>
</template>

<script>
import AppInfo from '@/components/app-info/AppInfo.vue'
import SearchPanel from '@/components/search-panel/SearchPanel.vue'
import AppFilter from '@/components/app-filter/AppFilter.vue'
import MovieList from '@/components/app-movie/MovieList.vue'
import AddMovie from '@/components/app-movie/AddMovie.vue'

export default {
  components: {
    AppInfo,
    SearchPanel,
    AppFilter,
    MovieList,
    AddMovie
  }
}
</script>

<style scoped>
.app{
  height: 100vh;
  color: #2c3e50;
}

.content{
  width: 1000px;
  min-height: 700px;
  background-color: aliceblue;
  margin: 0 auto;
  padding: 5rem 0;
}

.searching{
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 15px 14px 15px rgba(0,0,0,.15);
}

</style>