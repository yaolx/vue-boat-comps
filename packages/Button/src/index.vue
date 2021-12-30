<template>
  <div class="my-button" @click="$emit('click', $event)">
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineEmits(['click'])
</script>

<style scoped lang="less">
.my-button {
  display: inline-block;
  padding: 5px 10px;
  background: lightskyblue;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  &:active {
    background: rgb(92, 185, 243);
  }
  &:not(:last-child) {
    margin-right: 15px;
  }
}
</style>
