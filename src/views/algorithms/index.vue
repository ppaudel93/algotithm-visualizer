<template>
  <div class="algorithm-container">
    <div class="algorithm-sidebar">
      <div v-for="(value, key) in items" :key="key">
        <p class="sidebar-heading">{{ key }}</p>
        <p 
          v-for="item of value" 
          :key="item" 
          class="sidebar-item" 
          :class="{ 'background-dark': selectedItem === item }"
          @click="selectSidebarItem(item)"
        >
          {{ item }}
        </p>
      </div>
    </div>
    <div class="algorithm-main">
      <component 
        :is="`${selectedItem}Component`"
      />
    </div>
  </div>
</template>

<script>
import { Sidebar } from '@/libraries'

export default {
  components: {
    StackComponent: () => import('./StackView'),
    QueueComponent: () => import('./QueueView')
  },
  data: () => ({
    items: Sidebar.sidebarItems,
    selectedItem: Sidebar.sidebarItems['Basic Data Structures'][0]
  }),
  methods: {
    selectSidebarItem(item) {
      this.selectedItem = item
    }
  },
}
</script>

<style lang="sass">
@import '../../static/variables.sass'
.algorithm-container
  display: flex
  height: 100%
  .algorithm-sidebar
    flex-basis: 15%
    height: 100%
    background: #dee0e3
    margin-right: 5px
    margin-top: 5px
    overflow-y: auto
    .sidebar-heading
      background: $primary
      text-align: center
      color: $text-dark
    .sidebar-item
      padding: 5px
      font-weight: 600
      text-align: center
      &:hover
        background: #a3a5a8
        cursor: pointer
  .algorithm-main
    background: #dee0e3
    flex-basis: 85%
    height: 100%
    margin-top: 5px
    margin-left: 5px
.background-dark
  background: #a3a5a8
</style>