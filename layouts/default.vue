<template>
  <div class="flex flex-col min-h-screen">
    <TheNavbar />

    <main class="flex-grow pt-20">
      <div>
        <slot />
      </div>
    </main>

    <TheFooter />
  </div>
</template>