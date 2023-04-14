<template>
  <div class="btn-group">
    <PrimaryButton
      v-for="btn in buttons"
      :key="btn.name"
      type="button"
      :class="[filter_name === btn.name ? 'btn-dark' : 'btn-outline-dark']"
      @click="onfilter(btn.name)"
    >
      {{ btn.label }}
    </PrimaryButton>
  </div>
</template>

<script>
export default {
  name: 'AppFilter',
  props: {
    filter_name: {
      type: String,
      required: true
    }
  },
  data() {
    var buttons = [
      {
        name: 'all',
        label: 'Barcha kinolar'
      },
      {
        name: 'popular',
        label: 'Mashxur kinolar'
      },
      {
        name: 'most_viewed',
        label: "Eng ko'p ko'rilgan kinolar"
      }
    ]
    return {
      buttons
    }
  },
  methods: {
    onfilter(filter) {
      this.$emit('onfilter', filter)
    }
  }
}
</script>

<style></style>
