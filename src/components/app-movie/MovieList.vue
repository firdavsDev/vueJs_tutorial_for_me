<template>
    <ul class="movie-list list-group">
        <MovieItem />
        <MovieItem />
        <MovieItem />
    </ul>
</template>

<script>
import MovieItem from '@/components/app-movie/MovieItem.vue'

export default {
    components: {
        MovieItem
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