<template>
  <div>
    <div class="inner-container">
      <BaseImage class="image" src="https://media.giphy.com/media/Nx0rz3jtxtEre/giphy.gif" alt="Hello There!"/>
      <h1>Hello There! <BaseIcon class="welcome-icon" icon="hand" custom-size="mdi-49px"/></h1>
      <div>
        <span>I am Prayog and this is my playground.</span>
      </div>
    </div>
  </div>
</template>

<script>
import { BaseImage, BaseIcon } from '../components'
export default {
  components: {
    BaseImage,
    BaseIcon
  },

}
</script>

<style lang="sass">
  @import '../static/variables.sass'
  .inner-container
    border: 1px solid black
    padding: 2rem
    justify-content: center
    margin: 5rem 13rem
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2)
    transition: 0.3s
    background-color: white
    text-align: center
    &:hover
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2)
    .image
    .welcome-icon
      font-size: 1em
    h1
      color: $primary
      font-weight: 600
      font-size: 4em
    span
      color: $text-primary
      font-size: 1.5em
</style>