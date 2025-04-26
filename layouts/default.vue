<template>
  <div class="flex flex-col min-h-screen">
    <TheNavbar />
    
    <main class="flex-grow pt-20">
      <slot />
    </main>
    
    <TheFooter />
  </div>
</template>