<template>
  <div class="d-flex">
    <div class="stack-wrapper d-flex content-flex-start flex-direction-column flex-basis-50">
      <div class="d-flex flex-direction-column-reverse">
        <div v-if="elementsLength === 0" class="stack-element">
          <span>Empty</span>
        </div>
        <div v-for="element in elements" :key="element" class="stack-element m-t-10">
          <span>{{ element }}</span>
        </div>
      </div>
      <div class="d-flex m-t-20">
        <BaseButton
          class="m-r-10"
          label="Push"
          type="is-primary"
          @click="pushElement"
        />
        <BaseButton
          label="Pop"
          type="is-primary"
          @click="popElement"
        />
      </div>
    </div>
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
  border-right: none
  .stack-element
    background-color: $primary
    padding: 1rem
    animation-name: slide-left
    animation-duration: .4s
</style>
