<template>
  <Transition name="page" mode="out-in">
    <div class="page-wrapper">
      <slot />
    </div>
  </Transition>
</template>

<style scoped>
.page-wrapper {
  width: 100%;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>