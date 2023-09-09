<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { IArticleListItem } from '@/interfaces/articles/IArticleListItem'
import { useHttp } from '@/plugins/api'
import ArticlesListItem from './ArticlesListItem.vue'

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
  <div class="c-articles-list">
    <ArticlesListItem
      v-for="article in articles"
      :key="article.id"
      :article="article"
    />
  </div>
</template>
