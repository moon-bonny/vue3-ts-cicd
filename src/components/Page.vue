<script setup lang="ts">
import { ref } from 'vue'
import Dialog from './Dialog.vue'

let dialogVisible = ref<boolean>(false)

let text = ref<string>('立即体验')

function onTap() {
  dialogVisible.value = true
}

function onConfirm() {
  console.log('page confirm')
}

// 全局类型
let num1: T1 = 1
// 全局变量
window.userId = '1'
globalThis.age = 18
age = 20

console.log(userId, num1, age)
</script>

<template>
  <Dialog
    v-model="dialogVisible"
    msg="是否跳转？"
    @confirm="onConfirm"
  ></Dialog>
  <!-- <img class="bg" :src="bgUrl" /> -->
  <div class="bottom-btn" @click="onTap">{{ text }}</div>
</template>
<style lang="scss" src="@/assets/scss/reset.scss"></style>

<style lang="scss" scoped>
.bg {
  width: 100%;
}

.bottom-btn {
  margin: 0 0.48rem 1.05rem;
  /* // width: 9.84rem; */
  height: 1.15rem;
  background: $bg-primary;
  border-radius: 0.12rem;
  font-size: 0.42rem;
  font-weight: 400;
  color: #ffffff;
  line-height: 1.15rem;
  text-align: center;
  cursor: pointer;
}
</style>
