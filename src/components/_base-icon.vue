<template>
  <b-icon v-bind="$attrs" v-on="$listeners" :icon="icon" :size="size" :type="type">
  </b-icon>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'home'
    },
    size: {
      type: String,
      default: 'is-medium'
    },
    type: {
      type: String,
      default: 'is-primary'
    },
  },

}
</script>

<style>

</style>