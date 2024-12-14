<template>
  <div class="bg-slate-500 pt-[100px]">
    <h1>Sample Page</h1>
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
  </div>
</template>

<script setup>
const isChecked = ref(false);
</script>
