<template>
  <h1>404</h1>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'

defineProps({
  msg: {
    default: '学vue3的走起',
    type: String,
    required: true
  }
})

defineComponent({
  name: 'ErrorPage'
})
</script>
