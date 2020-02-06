<template>
  <div>
    <div class="stack-wrapper">
      <div v-if="elementsLength === 0" class="stack-element">
        <span>Empty</span>
      </div>
      <div v-for="element in elements" :key="element" class="stack-element">
        <span>{{ element }}</span>
      </div>
    </div>
    <BaseButton label="Push" type="is-primary" @click="pushElement"/>
    <BaseButton label="Pop" type="is-primary" @click="popElement"/>
  </div>
</template>

<script>
import { BaseButton } from '../../components'
export default {
  components: {
    BaseButton,
  },
  data: () => ({
    elements: []
  }),
  computed: {
    elementsLength() {
      return this.elements.length
    },
  },
  methods: {
    pushElement() {
      if (this.elementsLength < 10)
        this.elements = [...this.elements, this.elements.length + 1]
    },
    popElement() {
      this.elements.pop()
    }
  },
}
</script>

<style lang="sass">
@import "@/static/variables.sass"
.stack-wrapper
  display: flex
  justify-content: flex-start
  margin: 4rem 10rem 4rem 10rem
  border: 1px solid black
  border-right: none
  padding: 5px
  :nth-child(n)
    margin-left: 1rem
  :nth-child(1)
    margin-left: 5px
  .stack-element
    background-color: $primary
    padding: 1rem
    animation-name: slide-left
    animation-duration: .4s
@keyframes slide-left
  from
    transform: translateX(10px)
  to
    transform: translateX(0)
@keyframes slide-right
  from
    transform: translateX(0)
  to
    transform: translateX(10px)
</style>