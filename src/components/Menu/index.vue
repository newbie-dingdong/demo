<template>
  <a-menu
    :style="{ width: `${APP.slideWidth}px`, borderRadius: '4px' }"
    theme="light"
    breakpoint="xl"
    :collapsed="APP.slideCollapsed"
    :accordion="true"
    :default-open-keys="['home']"
    :default-selected-keys="['home']"
  >
    <a-sub-menu key="home">
      <template #icon>
        <icon-apps></icon-apps>
      </template>
      <template #title>首页</template>
      <a-menu-item key="home">首页</a-menu-item>
      <a-menu-item @click="router.push('/login')" key="login">登录</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script setup lang="ts">
import { IconApps } from '@arco-design/web-vue/es/icon'
import useAppState from '@/stores/app'
import router from '@/router'
const APP = useAppState()
</script>

<style lang="scss" scoped></style>

<!-- 2023/6/25 16:00 --fcg -->
