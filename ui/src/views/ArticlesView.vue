<script setup lang="ts">
import ArticlesList from '@/components/articles/ArticlesList.vue'
import PopularAuthors from '@/components/authors/PopularAuthors.vue'
</script>

<template>
  <div class="c-page c-articles-page">
    <div class="page-content-main">
      <ArticlesList />
    </div>
    <div class="page-content-right">
      <PopularAuthors />
    </div>
  </div>
</template>
