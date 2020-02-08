<template>
  <div class="main-loader">
    <div v-for="(item, index) in randomNumberArray" class="bubble" :class="{[bubbleClass(index)]: true}"/>
  </div>
</template>

<script>

export default {
  data: () => ({
    randomNumberArray: Array.from({length: 30}, () => Math.floor(Math.random() * 9))
  }),
  methods: {
    bubbleClass(index) {
      return `bubble-${index + 1}`
    }
  }
}
</script>

<style lang="sass">
</style>
