<template>
  <div id="app">
    <BaseHeader class="header"/>
    <router-view class="outer-container" />
  </div>
</template>

<script>
import { BaseHeader } from '@/components'
export default {
  name: 'App',
  components: {
    BaseHeader,
  },
};
</script>

<style lang="sass">
  .outer-container
    margin-top: 3rem
</style>
