<template>
  <div class="app font-monospace">
    <div class="content">

      <AppInfo :allMovieCount="movies.length" :favoriteMovieCount="movies.filter((c) => c.favorite).length" />

      <!-- searching  -->
      <div class="searching-panel mb-5">

        <SearchPanel @searchMovie="set_search_word" />

        <AppFilter @onfilter="set_filter" :filter_name="filter" />

      </div>

      <div v-if="!movies.length && !isLoading">

        <h1 class="text-center">No movies</h1>
      </div>

      <div v-else-if="isLoading">

        <Loader />

      </div>
      <div v-else>

        <MovieList :movies="onFilterHandler(search_Movie(movies), filter)" @delete_movie="delete_movie" />

        <Pagination :total="total_pages" @change_page="change_page" :page="page" />

        <!-- chnage limit  -->
        <div class="d-flex justify-content-end">
          <div class="form-select-lg">
            <label for="limit">Limit: </label>
            <select name="limit" id="limit" @change="change_limit($event.target.value)" v-model="limit">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
          </div>
        </div>

      </div>

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
import axios from 'axios'

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
        // {
        //   "id": 1,
        //   "name": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        //   "views": 1000,
        //   "like": true,
        //   "favorite": true
        // }
      ],
      searching_word: '',
      filter: '',
      isLoading: false,
      limit: 10,
      page: 1,
      total_pages: 0
    }
  },

  methods: {

    async addMovie(movie) {
      try {
        let response = await axios.post('https://jsonplaceholder.typicode.com/posts', movie)
        this.movies.push(response.data)
      } catch (error) {
        alert(error.message);
      }
    },

    async delete_movie(movie) {
      try {
        this.isLoading = true
        let response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${movie.id}`)
        console.log(response);
        const index = this.movies.indexOf(movie)
        this.movies.splice(index, 1)
      } catch (error) {
        alert(error.message);
      } finally {
        this.isLoading = false
      }

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
          return arr.filter((c) => c.views > 500)
        default:
          return arr
      }
    },

    set_filter(filter) {
      this.filter = filter

    },

    // send get request to get movies API
    async getMovies() {
      try {
        this.isLoading = true
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _limit: this.limit,
            _page: this.page
          }
        })
        // update response data title to name
        // response.data.forEach((c) => (c.name = c.title))
        var newarr = response.data.map(item => {
          return {
            id: item.id,
            name: item.title,
            views: item.id + Math.floor(Math.random() * 1000),
            like: true,
            favorite: true
          }
        })
        this.movies = newarr
        this.total_pages = Math.ceil(response.headers['x-total-count'] / this.limit)
      } catch (error) {

        alert(error);
      } finally {
        this.isLoading = false
      }
    },
    change_page(page_number) {
      // dont refresh page
      this.page = page_number
    },

    change_limit(limit) {
      this.limit = limit
    }
  },

  // get movies when component mounted
  mounted() {
    console.log('mounted');
    this.getMovies()
  },

  // watch: is using to watch any changes in data and do something
  watch: {
    // watch for changes in page number
    page() {
      this.getMovies()
    },
    limit() {
      this.getMovies()
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
