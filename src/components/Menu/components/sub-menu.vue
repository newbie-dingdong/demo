<template>
  <a-sub-menu :key="route.name">
    <template #icon>
      <icon-apps></icon-apps>
    </template>
    <template #title>{{ route.meta?.title }}</template>
    <template v-for="child in route.children" :key="child.name">
      <template v-if="!child.children">
        <a-menu-item :key="child.name">{{ child.meta.title }}</a-menu-item>
      </template>
      <sub-menu :route="child" :key="child.name" v-else />
    </template>
  </a-sub-menu>
</template>

<script setup lang="ts">
import { RouteRaw } from '../types'
import { IconApps } from '@arco-design/web-vue/es/icon'
const props = withDefaults(
  defineProps<{
    route: RouteRaw
  }>(),
  {}
)
</script>

<style lang="scss" scoped></style>

<!-- 2023/6/27 14:11 --fcg -->
