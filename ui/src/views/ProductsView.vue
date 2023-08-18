<script setup lang="ts">
import TheWelcome from '@/components/TheWelcome.vue';
</script>

<template>
  <div class="c-page c-products-page">
    <div class="page-content-main">
      Products list:
      <TheWelcome />
    </div>
    <div class="page-content-right"></div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
