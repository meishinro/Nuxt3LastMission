<template>
  <div class="flex h-screen w-[100%] bg-black pt-[120px]">
    <img class="w-1/2" src="/public/laptop/register.png" alt="register" />
    <div class="relative w-1/2">
      <img
        class="absolute top-[72px]"
        src="/public/laptop/line3.png"
        alt="line3"
      />
      <div class="absolute left-[25%] top-[140px]">
        <slot />
      </div>
    </div>
  </div>
</template>
