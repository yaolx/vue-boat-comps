<template>
  <h1>{{ msg }}</h1>
  <p>
    Recommended setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank">Vetur</a>
    +
    <a href="https://marketplace.visualstudio.com/items?itemName=znck.vue-language-features-insiders" target="_blank"> Vue LaVue Language Features (Insiders) </a>
  </p>
  <m-button @click="onHandler">
    测试按钮组件
  </m-button>
  <div v-if="user.name">
    姓名：{{ user?.name }} 年龄：{{ user?.age }}
  </div>
</template>

<script setup lang="ts">
import request from '@/config/request'
import { ref, defineComponent } from 'vue'
interface User {
  name?: string
  age?: number
  mobile?: number
}
defineProps({
  msg: {
    default: '学vue3的走起',
    type: String,
    required: false
  }
})
const user = ref<User>({})
const onHandler = () => {
  request(
    {
      url: '/api/user',
      method: 'get'
    },
    {
      loading: true
    }
  ).then(({ data }) => {
    user.value = data
    console.log('user', user.value)
  })
}
defineComponent({
  name: 'HelloWorld'
})
const count = ref(1)
</script>
