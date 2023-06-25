<template>
  <a-layout class="h-screen bg-[#f2f3f5]">
    <nav-bar />
    <a-layout-sider
      :class="['layout-slider', `!w-[${APP.slideWidth}px]`]"
      :collapsed="APP.slideCollapsed"
      breakpoint="xl"
    >
      <div class="layout-slider-container relative h-full">
        <Menu />
        <a-button @click="APP.toggleCollapsed" class="slide-toggle">
          <icon-menu-unfold v-if="APP.slideCollapsed" />
          <icon-menu-fold v-else />
        </a-button>
      </div>
    </a-layout-sider>
    <a-layout :style="{ paddingLeft: `${APP.slideWidth}px` }" class="layout-content w-full">
      <a-layout class="layout-content-container">
        <a-breadcrumb>
          <a-breadcrumb-item>首页</a-breadcrumb-item>
          <a-breadcrumb-item>我的</a-breadcrumb-item>
          <a-breadcrumb-item>个人信息</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content class="mt-3">
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer>
          <Footer />
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { IconMenuFold, IconMenuUnfold } from '@arco-design/web-vue/es/icon'
import Menu from '@/components/Menu/index.vue'
import NavBar from '@/components/NavBar/index.vue'
import Footer from '@/components/Footer/index.vue'
import useAppState from '@/stores/app'

const APP = useAppState()
</script>

<style lang="scss" scoped>
.layout-slider {
  @apply pt-[60px] overflow-y-hidden fixed left-0 h-full z-[99];
}

.slide-toggle {
  @apply bg-white absolute right-1.5 bottom-1 px-1 h-[24px];
}

.layout-content {
  @apply pt-[60px] min-h-screen;
  .layout-content-container {
    @apply relative p-3;
  }
}
</style>

<!-- 2023/6/25 10:25 --fcg -->
