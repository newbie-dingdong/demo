<template>
  <a-menu
    :style="{ width: `${APP.slideWidth}px`, borderRadius: '4px' }"
    theme="light"
    breakpoint="xl"
    auto-open-selected
    :level-indent="34"
    @menu-item-click="handleMenu"
    :collapsed="APP.slideCollapsed"
    :accordion="true"
    :selected-keys="[ROUTE.name]"
  >
    <template v-for="route in visibleRoutes" :key="route.name">
      <template v-if="!route.children || route.children.length === 1">
        <a-menu-item :key="!route.children ? route.name : route.children[0].name">
          <template #icon>
            <icon-apps />
          </template>
          {{
            !route.children
              ? route?.meta?.title || 'meta为空'
              : route.children[0]?.meta?.title || 'meta为空'
          }}
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :key="route.name" :route="route" />
      </template>
    </template>
  </a-menu>
</template>

<script setup lang="ts">
import { RouteRaw } from '../types'
import SubMenu from '@/components/Menu/components/sub-menu.vue'
import { IconApps } from '@arco-design/web-vue/es/icon'
import useAppState from '@/stores/app'
import { useRoute } from 'vue-router'
import router from '@/router'
import { computed } from 'vue'

const APP = useAppState()
const ROUTE = useRoute()
const props = withDefaults(
  defineProps<{
    routes: RouteRaw[]
  }>(),
  {}
)

const visibleRoutes = computed(() => (props.routes || []).filter((item) => !item.hideInMenu))

const handleMenu = (e: string) => {
  console.log(e)
  router.push({ name: e })
}
</script>

<style lang="scss" scoped></style>

<!-- 2023/6/27 14:10 --fcg -->
