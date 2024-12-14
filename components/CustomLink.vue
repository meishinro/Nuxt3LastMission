<template>
  <NuxtLink
    :to="to"
    class="cursor-pointer text-primary underline underline-offset-2"
  >
    <slot></slot>
  </NuxtLink>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>
