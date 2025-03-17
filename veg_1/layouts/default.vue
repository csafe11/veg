<template>
  <div class="app-container">
    <NavBar />
    <div class="container mx-auto">
    <slot />
    </div>
  </div>
</template>



<style scoped>
/* Alap háttérszín beállítása */
.app-container {
  min-height: 100vh; /* Teljes képernyőmagasság */
  background-color: #ffced8; /* Világos szürke háttér */
}
</style>


