<template>
  <div
    class="navbar z-[100] fixed top-0 w-full justify-between items-center px-4 bg-white border-b h-[60px] flex"
  >
    <div class="logo">
      <span class="text-[0.75rem]">{{ config.title }}</span>
    </div>
    <div class="right pr-4 cursor-pointer">
      <a-dropdown>
        <a-avatar>A</a-avatar>
        <template #content>
          <a-button class="!text-black hover:!text-[#165dff]" type="text">
            <template #icon>
              <icon-import :rotate="180" />
            </template>
            退出登录
          </a-button>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import config from '@/config'
import { IconImport } from '@arco-design/web-vue/es/icon'
</script>

<style lang="scss" scoped></style>

<!-- 2023/6/25 14:55 --fcg -->
