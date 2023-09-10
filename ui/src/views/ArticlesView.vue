<script setup lang="ts">
import type { IArticleListItem } from '@/interfaces/articles/IArticleListItem';
import { onMounted, ref } from 'vue'
import { useHttp } from '@/plugins/api'
import ArticlesList from '@/components/articles/ArticlesList.vue'
import PopularAuthors from '@/components/authors/PopularAuthors.vue'

const api = useHttp()
const articles = ref<IArticleListItem[]>([])

onMounted((): void => {
  fetchArticles()
})

const fetchArticles = async (): Promise<void> => {
  await api.articles.getAll()
    .then(data => articles.value = data)
    .catch(ex => console.log(ex.code))
}
</script>

<template>
  <div class="c-page c-articles-page">
    <div class="page-content-main">
      <ArticlesList :articles="articles" />
    </div>
    <div class="page-content-right">
      <PopularAuthors />
    </div>
  </div>
</template>
