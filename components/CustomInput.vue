<template>
  <div class="flex flex-col">
    <!-- 自定義輸入框 -->
    <input
      :style="{ width: width, height: height }"
      :placeholder="placeholder"
      class="rounded border border-gray-300 p-4 focus:outline-none"
      v-model="inputValue"
      @input="$emit('update:modelValue', inputValue)"
    />
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

// 定義 props
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "200px",
  },
  height: {
    type: String,
    default: "40px",
  },
  placeholder: {
    type: String,
    default: "",
  },
});

// 綁定輸入值
const inputValue = ref(props.modelValue);
</script>
