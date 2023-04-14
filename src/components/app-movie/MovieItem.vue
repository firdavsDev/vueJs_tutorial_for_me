<template>
  <div>
    <li
      class="list-group-item d-flex justify-content-between"
      v-bind:class="[{ like: movie.like }, { favorite: movie.favorite }]"
    >
      <span class="list-group-item-label" @click="onlike">{{ movie.name }}</span>

      <input type="text" class="list-group-item-input" v-bind:value="movie.views" />

      <div class="d-flex justify-content-center align-items-center">
        <button type="button" class="btn btn-cookie btn-sm" @click="oncookie">
          <i class="fas fa-cookie"></i>
        </button>

        <button type="button" class="btn btn-trash btn-sm" @click="ondelete">
          <i class="fas fa-trash"></i>
        </button>

        <button type="button" class="btn btn-star btn-sm">
          <i class="fas fa-star"></i>
        </button>
      </div>
    </li>
  </div>
</template>

<script scoped>
export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  methods: {
    onlike() {
      // eslint-disable-next-line vue/no-mutating-props
      this.movie.like = !this.movie.like
    },
    oncookie() {
      // eslint-disable-next-line vue/no-mutating-props
      this.movie.favorite = !this.movie.favorite
    },
    ondelete() {
      // eslint-disable-next-line vue/no-mutating-props
      this.$emit('delete_movie', this.movie)
    }
  }
}
</script>

<style scoped>
.list-group-item {
  padding: 15px 20px;
  border-bottom: 2px solid #3d5a80;
}
.list-group-item:last-child {
  border-bottom: none;
}
.list-group-item span {
  line-height: 35px;
  font-size: 20px;
  cursor: pointer;
  width: 550px;
}
.list-group-item input {
  line-height: 35px;
  font-size: 20px;
  text-align: center;
  border: 0;
  outline: none;
}
.list-group-item button {
  width: 35px;
  height: 35px;
  margin: 3px;
  font-size: 17px;
  border: none;
  cursor: pointer;
}
.btn-cookie {
  color: #3d5a80;
  background-color: #e0fbfc;
}
.btn-trash {
  color: red;
  background-color: #e0fbfc;
}
.btn-star {
  width: 35px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  font-size: 16px;
  color: #ffd700;
  transition: all 0.3s;
  transform: translateX(30px);
  opacity: 0;
}
.list-group-item.like .btn-star {
  opacity: 1;
  transform: translateX(0);
}
.list-group-item.favorite .list-group-item-label {
  color: #ffd700;
}
.list-group-item.favorite .list-group-item-input {
  color: #ffd700;
}
</style>
