<!-- eslint-disable vue/valid-v-for -->
<template>
    <ul class="movie-list list-group">
        <MovieItem v-for="movie in movies" :movie="movie" @delete_movie="delete_movie" :key="movie.id"/>
    </ul>
</template>

<script>
import MovieItem from '@/components/app-movie/MovieItem.vue'

export default {
    components: {
        MovieItem
    },
    props: {
        movies: {
            type: Array,
            required: true,
        }
    },
    methods: {
        delete_movie(movie) {
            this.$emit('delete_movie', movie);
        }
    }
}

</script>

<style scoped>
.movie-list{
    margin-top: 2rem;
    padding: 1.5rem;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 15px 15px 15px rgba(0,0,0,.15);
}
</style>