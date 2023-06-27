<template>
  <a-result status="404" subtitle="访问的路径不存在">
    <template #extra>
      <a-space>
        <a-button @click="router.back()" type="primary">返回</a-button>
      </a-space>
    </template>
  </a-result>
</template>

<script setup lang="ts">
import router from '@/router'
</script>

<style lang="scss" scoped></style>

<!-- 2023/6/27 11:34 --fcg -->
