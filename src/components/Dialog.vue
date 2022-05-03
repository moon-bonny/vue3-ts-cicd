<script setup lang="ts">
defineProps({
  modelValue: { type: Boolean, default: false },
  title: { type: String, default: '弹窗提示' },
  msg: { type: String, default: '弹窗信息' }
})

console.log(userId, age)
/* interface Props {
  modelValue?: boolean
  title?: string
  msg?: string
}

let props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  // title: "弹窗提示",
  msg: "弹窗信息",
}); */

const emit = defineEmits<{
  (e: 'update:modelValue', visible: boolean): boolean
  (e: 'cancel'): void
  (e: 'confirm'): void
}>()

console.log('emit事件', emit)
function hide() {
  emit('update:modelValue', false)
}

function onCancel() {
  console.log('点击取消')
  emit('cancel')
  hide()
}

function onConfirm() {
  console.log('点击确定')
  emit('confirm')
  hide()
}
</script>

<template>
  <div class="dialog" v-show="modelValue">
    <div class="mask"></div>
    <div class="dialog-content">
      <div class="dialog-content-top">
        <p class="dialog-content-title">{{ title }}</p>
        <p class="dialog-content-msg">{{ msg }}</p>
      </div>
      <div class="dialog-content-bottom">
        <span class="dialog-content-btn" @click="onCancel">取消</span>
        <span class="dialog-content-btn" @click="onConfirm">确定</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" src="@/assets/scss/reset.scss"></style>

<style lang="scss" scoped>
.dialog {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100%;
  &-content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 8.1rem;
    background: #fff;
    border-radius: 0.36rem;
    text-align: center;

    &-top {
      margin: 0.6rem 0.2rem;
    }

    &-title {
      margin-bottom: 0.42rem;
      font-size: 0.42rem;
      font-weight: 500;
      color: #000000;
    }
    &-msg {
      font-size: 0.42rem;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.7);
      line-height: 0.59rem;
    }

    &-bottom {
      border-top: 1px solid #eee;
      white-space: nowrap;
    }
    &-btn {
      display: inline-block;
      width: 50%;
      height: 1.3rem;
      border-right: 1px solid #eee;
      line-height: 1.3rem;
      font-size: 0.51rem;
      font-weight: 400;
      color: #417ff9;
      &:last-child {
        border: none;
      }
    }
  }
}
</style>
