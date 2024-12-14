<template>
  <button
    class="disabled:bg-neutral40 disabled:text-neutral60 rounded-lg bg-primary px-8 py-1 font-medium text-white transition-colors duration-150 hover:bg-white hover:text-black"
    :disabled="disabled"
    :style="{ width, height }"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed, defineProps, defineEmits } from "vue";

// 定義 props
const props = defineProps({
  width: {
    type: String,
    default: "auto",
  },
  height: {
    type: String,
    default: "auto",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

// 定義 emits
const emit = defineEmits(["click"]);

// 處理點擊事件
const handleClick = () => {
  if (!props.disabled) emit("click");
};
</script>
