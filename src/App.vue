<template>
  <div id="app" class="app">
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
  .app
    height: 100%
    .outer-container
      margin-top: 3rem
</style>
