<script setup>
definePageMeta({
  layout: "auth",
});
</script>
<template>
  <div class="flex flex-col items-start space-y-10">
    <div>
      <p class="text-[16px] text-primary">享樂酒店，誠摯歡迎</p>
      <h1 class="text-4xl font-bold text-white">立即開始旅程</h1>
    </div>
    <div class="flex w-[400px] flex-col space-y-4">
      <div>
        <p class="mb-2 text-white">電子信箱</p>
        <CustomInput
          height="56px"
          width="400px"
          placeholder="hello@exsample.com"
        />
      </div>
      <div>
        <p class="mb-2 text-white">密碼</p>
        <CustomInput height="56px" width="400px" placeholder="請輸入密碼" />
      </div>
      <div class="flex items-center justify-between">
        <CustomCheckbox label="記住帳號" />
        <CustomLink to="/forgot-password">忘記密碼？</CustomLink>
      </div>
    </div>
    <CustomButton width="400px" height="56px" variant="primary"
      >登入</CustomButton
    >
    <div>
      <span class="mr-2 text-white">還沒有會員嗎？</span>
      <CustomLink to="/signup">前往註冊</CustomLink>
    </div>
  </div>
</template>
