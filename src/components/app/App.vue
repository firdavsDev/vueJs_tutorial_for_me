<template>
  <div class="app font-monospace">
    <div class="content">

      <AppInfo :allMovieCount="movies.length" :favoriteMovieCount="movies.filter(c => c.favorite).length" />

      <!-- searching  -->
      <div class="searching-panel">
        <SearchPanel @searchMovie="searchMovie" />
        <AppFilter />
      </div>
      <MovieList :movies="onSearchHandler(movies, searching_word)" @delete_movie="delete_movie" />
      <AddMovie @addMovie="addMovie" />
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
  },
  data() {
    return {
      movies: [
        {
          "id": 1,
          "name": "The Shawshank Redemption",
          "views": 1000000,
          "like": true,
          "favorite": true,

        },
        {
          "id": 2,
          "name": "The Shawshank Redemption",
          "views": 1000000,
          "like": true,
          "favorite": true,
        },
        {
          "id": 3,
          "name": "The Shawshank Redemption",
          "views": 1000000,
          "like": false,
          "favorite": false,

        },
        {
          "id": 4,
          "name": "The Shawshank Redemption",
          "views": 1000000,
          "like": false,
          "favorite": false,

        },
      ],
      searching_word: '',
    }
  },
  methods: {
    addMovie(movie) {
      this.movies.push(movie)
    },
    delete_movie(movie) {
      const index = this.movies.indexOf(movie);
      this.movies.splice(index, 1);
    },
    searchMovie(arr, search) {
      if (search.length !== 0) {
        return this.movies = arr.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
      }
      return this.movies;

    },
    onSearchHandler(arr, searching_word) {
      if (searching_word.length == 0) {
        return arr;
      }
      return arr.filter(c => c.name.toLowerCase().indexOf(searching_word.toLowerCase()) > -1);
    }
  }
}

</script>

<style scoped>
.app {
  height: 100vh;
  color: #2c3e50;
}

.content {
  width: 1000px;
  min-height: 700px;
  background-color: aliceblue;
  margin: 0 auto;
  padding: 5rem 0;
}

.searching-panel {
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 15px 14px 15px rgba(0, 0, 0, .15);
}
</style>