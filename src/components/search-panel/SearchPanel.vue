<template>
  <input
    type="text"
    class="form-control search-input"
    placeholder="Kinolarni qidirish"
    :value="search"
    @input="searchMovie"
  />
</template>

<script scoped>
export default {
  name: 'SearchPanel',
  data() {
    return {
      search: ''
    }
  },
  methods: {
    searchMovie(e) {
      this.search = e.target.value
      this.$emit('searchMovie', this.search)
    }
  }
}
</script>

<style>
.search-input {
  margin-bottom: 1rem;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>
