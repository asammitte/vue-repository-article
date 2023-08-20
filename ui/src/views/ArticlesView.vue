<script setup lang="ts">
import ArticlesList from '@/components/articles/ArticlesList.vue'
import TopAuthors from '@/components/authors/TopAuthors.vue';
</script>

<template>
  <div class="c-page c-articles-page">
    <div class="page-content-main">
      <ArticlesList />
    </div>
    <div class="page-content-right">
      <TopAuthors />
    </div>
  </div>
</template>
