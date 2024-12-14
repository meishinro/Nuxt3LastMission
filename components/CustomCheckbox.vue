<template>
  <label class="flex cursor-pointer items-center">
    <!-- 隱藏的原生 checkbox -->
    <input
      type="checkbox"
      class="hidden"
      :checked="modelValue"
      @change="toggleCheck"
    />
    <!-- 自定義樣式 -->
    <div class="relative flex h-6 w-6 items-center justify-center rounded">
      <div
        class="absolute inset-0 rounded"
        :style="{
          backgroundColor: modelValue ? '#BF9D7D' : '#FFFFFF',
          opacity: modelValue ? '0.8' : '1',
        }"
      ></div>
      <img
        v-if="modelValue"
        src="/icons/checked.svg"
        alt="Checked"
        class="z-10 h-4 w-4"
      />
    </div>
    <!-- 可選文字標籤 -->
    <span v-if="label" class="ml-2 text-white">{{ label }}</span>
  </label>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

// 定義 props
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true, // 使用 v-model 綁定
  },
  label: {
    type: String,
    default: "", // 可選文字標籤
  },
});

// 定義 emits
const emit = defineEmits(["update:modelValue"]);

// 切換狀態
const toggleCheck = () => {
  emit("update:modelValue", !props.modelValue);
};
</script>
