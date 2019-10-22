<template>
  <div class="main-body">
    <transition name="fade">
      <strong class="primary-text animate-fade-in main-screen-content">The Vue Learning Experience</strong>
    </transition>
  </div>
</template>

<script>
import { BaseButton } from '../components'

export default {
  
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
  .fade-enter-active, .fade-leave-active
    transition: opacity 0.5s
  .fade-enter, .fade-leave-to
    opacity: 0
  .main-screen-content
    font-size: 3em
    position: fixed
    top: 40vh
    left: 28vw
    padding: 0.5rem
</style>
