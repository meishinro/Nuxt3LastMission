<template>
  <div class="absolute flex w-full justify-between px-[80px]">
    <img
      class="py-6"
      style="width: 196px; height: auto"
      src="/public/laptop/logo.png"
      alt="logo"
    />
    <div class="flex items-center space-x-4 py-8">
      <!-- 如果路由為/login或/signup則不顯示 -->
      <div v-if="$route.path !== '/login' && $route.path !== '/signup'">
        <NuxtLink to="/rooms" class="p-4 text-white">客房旅宿</NuxtLink>
        <NuxtLink to="/login" class="p-4 text-white">會員登入</NuxtLink>
        <CustomButton variant="primary">立即訂房</CustomButton>
      </div>
      <!-- 如果路由為/login或/signup則不顯示 -->
    </div>
  </div>
</template>

<script setup></script>
