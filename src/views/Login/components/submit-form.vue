<template>
  <div class="login-form w-[320px]">
    <div class="font-medium text-black text-lg">{{ config.title }}</div>
    <div class="error-msg text-[0.6rem] h-4 text-red-700">{{ errorMessage }}</div>
    <div class="form mt-1">
      <a-form @submit="handleSubmit" :model="params">
        <a-form-item
          :validate-trigger="['change', 'blur']"
          :rules="[{ required: true, message: '请输入账号' }]"
          field="username"
          hide-label
        >
          <a-input v-model="params.username" placeholder="账号" allow-clear>
            <template #prefix>
              <icon-user />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
          :validate-trigger="['change', 'blur']"
          :rules="[{ required: true, message: '请输入密码' }]"
          field="password"
          hide-label
        >
          <a-input-password v-model="params.password" placeholder="密码" allow-clear>
            <template #prefix>
              <icon-lock />
            </template>
          </a-input-password>
        </a-form-item>
        <a-button class="mt-2" html-type="submit" type="primary">登录</a-button>
      </a-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import config from '@/config'
import { IconUser, IconLock } from '@arco-design/web-vue/es/icon'
import { reactive, ref } from 'vue'
import { ISubmitFormReturn } from '@/types'
import router from '@/router'

const errorMessage = ref('')
const params = reactive({
  username: 'username',
  password: 'password'
})
const handleSubmit = (data: ISubmitFormReturn) => {
  if (!data.errors) {
    router.push('/home')
  }
}
</script>

<style lang="scss" scoped></style>

<!-- 2023/6/25 11:35 --fcg -->
