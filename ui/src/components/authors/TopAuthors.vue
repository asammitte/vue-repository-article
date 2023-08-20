<script setup lang="ts">
import type { IArticleListItem } from '@/interfaces/articles/IArticleListItem';
import { useHttp } from '@/plugins/api'
import { onMounted, ref } from 'vue';

const topRatedArticles = ref<IArticleListItem[]>()
</script>

<template>
  <div class="c-top-authors">
    <div class="top-authors-header">
      <h4>Most popular authors:</h4>
      <ul>
        <li>Arthur</li>
        <li>Mike</li>
        <li>Sam</li>
        <li>David</li>
      </ul>
    </div>
  </div>
</template>