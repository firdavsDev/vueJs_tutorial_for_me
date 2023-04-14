<template>
  <div class="app font-monospace">
    <div class="content">
      <AppInfo
        :allMovieCount="movies.length"
        :favoriteMovieCount="movies.filter((c) => c.favorite).length"
      />

      <!-- searching  -->
      <div class="searching-panel">
        <SearchPanel @searchMovie="set_search_word" />

        <AppFilter @onfilter="set_filter" :filter_name="filter" />
      </div>

      <MovieList
        :movies="onFilterHandler(search_Movie(movies), filter)"
        @delete_movie="delete_movie"
      />

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
          id: 1,
          name: 'Merlin',
          views: 1000000,
          like: true,
          favorite: true
        },
        {
          id: 2,
          name: 'Qirolik',
          views: 1000000,
          like: true,
          favorite: true
        },
        {
          id: 3,
          name: 'Spy Family',
          views: 1000000,
          like: false,
          favorite: false
        },
        {
          id: 4,
          name: 'The Shawshank Redemption',
          views: 1000000,
          like: false,
          favorite: false
        }
      ],
      searching_word: '',
      filter: ''
    }
  },
  methods: {
    addMovie(movie) {
      this.movies.push(movie)
    },
    delete_movie(movie) {
      const index = this.movies.indexOf(movie)
      this.movies.splice(index, 1)
    },
    search_Movie(arr) {
      if (this.searching_word.length == 0) {
        return arr
      }
      return arr.filter((c) => c.name.toLowerCase().includes(this.searching_word.toLowerCase()))
    },
    set_search_word(search) {
      this.searching_word = search
    },
    onFilterHandler(arr, filter) {
      switch (filter) {
        case 'popular':
          return arr.filter((c) => c.like)
        case 'most_viewed':
          return arr.filter((c) => c.views > 4)
        default:
          return arr
      }
    },
    set_filter(filter) {
      this.filter = filter
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
  box-shadow: 15px 14px 15px rgba(0, 0, 0, 0.15);
}
</style>
