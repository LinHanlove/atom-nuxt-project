<script setup>
import {useCounterStore} from '~/stores/myStore'


// 指定布局容器
definePageMeta({
  layout: 'custom',
  middleware: ['auth']
})

// 应用全局状态
const store = useCounterStore()

console.log('store',store);

// 调用server api 响应数据
const res = await $fetch('/api/hello')
console.log('res',res);

// 引入自定义插件
const {$sayHello} = useNuxtApp()
console.log('useNuxtApp', useNuxtApp());

// 调用自定义插件
$sayHello('linhan')

const handleSay = ()=>useSay('hello')

const counter = useCounter()

</script>

<template>
  <div>
    main page
    <button @click="handleSay" class="w-[100px] h-[40px] rounded-lg border-[1px] border-gray-300 bg-white">say</button>
    <button @click="counter++" class="w-[100px] h-[40px] rounded-lg border-[1px] border-gray-300 bg-white">states</button>
    <p>{{ counter }}</p>

    <ContentDoc/>

  </div>
</template>
