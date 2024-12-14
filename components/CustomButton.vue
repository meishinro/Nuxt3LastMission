<template>
  <button
    :class="[
      'rounded-lg px-8 py-1 font-medium transition-colors duration-150',
      computedClasses,
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed, defineProps, defineEmits } from "vue";

// 定義 props
const props = defineProps({
  variant: {
    type: String,
    default: "primary", // 'primary', 'secondary', 'danger'
  },
  size: {
    type: String,
    default: "md", // 'sm', 'md', 'lg'
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

// 定義 emits
const emit = defineEmits(["click"]);

// 動態計算按鈕的 class
const computedClasses = computed(() => {
  const base = {
    primary:
      "bg-primary text-white hover:bg-white hover:text-black disabled:bg-gray-300",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 disabled:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600 disabled:bg-red-300",
  };

  const size = {
    sm: "text-sm px-3 py-1",
    md: "text-base px-4 py-2",
    lg: "text-lg px-5 py-3",
  };

  return `${base[props.variant] || base.primary} ${size[props.size] || size.md}`;
});

// 處理點擊事件
const handleClick = () => {
  if (!props.disabled) emit("click");
};
</script>

<style scoped>
button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
</style>
