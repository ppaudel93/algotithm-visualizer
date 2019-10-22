<template>
  <b-button :text="link" :small="small">
    {{ label }}
  </b-button>
</template>

<script>

export default {
  props: {
    label: {
      type: String,
      default: 'Button',
    },
    link: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    }
  }
}
</script>
