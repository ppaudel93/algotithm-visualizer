<template>
  <b-navbar class="navbar" fixed-top type="is-dark">
    <b-button
      class="navbar-item" 
      :key="item.value" 
      v-for="item in items" 
      :slot="item.slot" 
      :icon-left="item.icon" 
      type="is-text"
      @click="goToRoute(item.to)"
    >
      {{ item.label }}
    </b-button>
  </b-navbar>
</template>

<script>
import { Header } from '@/libraries'
export default {
  name: 'BaseHeader',
  data: () => ({
    items: Header.headerItems,
  }),
  methods: {
    goToRoute(route) {
      this.$router.push(route)
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "@/static/variables.sass"
  .navbar
    align-items: center
    .logo
      height: 3.5rem
    .navbar-item
      text-decoration: none
      padding: 0.4rem
      margin: 0.2rem
      margin-bottom: 0
      opacity: 0.8
      &:hover, &:active, &:focus
        background-color: $primary
        opacity: 1
</style>
