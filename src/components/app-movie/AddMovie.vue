<template>
  <div class="movie-add-form">
    <h3>Kino qo'shish</h3>
    <form class="add-form d-flex" @submit.prevent>
      <input
        type="text"
        class="form-control new-movie-label"
        placeholder="Qanday kino?"
        :value="name"
        @input="name = $event.target.value"
        required
      />
      <input
        type="text"
        class="form-control new-movie-label"
        placeholder="Necha marotaba ko'rilgan"
        :value="views"
        @input="views = $event.target.value"
        required
      />
      <PrimaryButton class="btn-outline-dark" type="submit" @click="onAddMovie"
        >Qo'shish</PrimaryButton
      >
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      views: ''
    }
  },
  methods: {
    onAddMovie() {
      // check if input is empty
      if (this.name.trim() === '' || this.views.trim() === '') {
        return alert("Iltimos, kino nomini va ko'rilgan marta sonini kiriting")
      }
      const newMovie = {
        id: Date.now(),
        name: this.name,
        views: this.views,
        like: false,
        favorite: false
      }
      this.$emit('addMovie', newMovie) // this.$emit('addMovie', {name: this.name, views: this.views});
      this.name = '' // this.name = '';
      this.views = '' // this.views = '';
    }
  }
}
</script>

<style>
.movie-add-form {
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>
