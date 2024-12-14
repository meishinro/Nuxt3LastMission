<template>
  <div class="bg-slate-500 pt-[100px]">
    <!-- CustomButton -->
    <div class="flex space-x-2 bg-gray-700 p-4">
      <CustomButton>按我</CustomButton>
      <CustomButton width="200px" height="40px" disabled
        >非活性按鈕</CustomButton
      >
    </div>
    <!-- CustomCheckbox -->
    <div class="flex space-x-2 bg-gray-700 p-4">
      <CustomCheckbox v-model="isChecked" label="選我" />
      <CustomCheckbox disabled label="非活性" />
    </div>
    <!-- CustomInput -->
    <div class="flex space-x-2 bg-gray-700 p-4">
      <CustomInput v-model="inputValue" placeholder="輸入文字" />
      <CustomInput
        v-model="inputValue"
        width="300px"
        height="40px"
        placeholder="輸入文字"
      />
    </div>
    <!-- CustomLink -->
    <div class="flex space-x-2 bg-gray-700 p-4">
      <CustomLink to="/">回首頁</CustomLink>
      <CustomLink to="/sample">到範例頁</CustomLink>
    </div>
  </div>
</template>

<script setup>
const isChecked = ref(false);
</script>
