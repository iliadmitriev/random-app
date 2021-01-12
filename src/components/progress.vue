<template>
  <div class="progress">
    <div class="progress-bar" v-bind:style="progress">
    </div>
  </div>
</template>

<script>
export default {
  name: "app-progress",
  props: {
    max: Number,
    val: Number
  },
  computed: {
    progress() {
      let w = (this.val / this.max) * 100
      if (w > 100) {
        w = 100
      } else if (w < 0) {
        w = 0
      }

      return {
        width: w + '%'
      }
    }
  }
}
</script>

<style scoped>

</style>
