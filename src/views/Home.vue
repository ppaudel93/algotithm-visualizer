<template>
  <div class="main-body">
    <BaseBubbleLoader/>
    <transition name="fade">
      <p class="primary-tag-wrapper animate-fade-in main-screen-content">The Vue Learning Experience</p>
    </transition>
  </div>
</template>

<script>
import { BaseBubbleLoader } from '../components'

export default {
  components: {
    BaseBubbleLoader,
  }
};
</script>

<style lang="sass">
.main-body
  background: url(../assets/unsplash-macbook.jpg) no-repeat center center fixed
  -webkit-background-size: cover
  -moz-background-size: cover
  -o-background-size: cover
  background-size: cover
  background-repeat: no-repeat
  background-position: center
  background-attachment: fixed
  width: 100vw
  height: calc(100vh - 3rem)
  .main-screen-content
    position: fixed
    top: 40vh
    left: 28vw
    padding: 0.5rem
</style>
