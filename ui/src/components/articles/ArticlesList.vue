<script setup lang="ts">
import { onMounted, ref } from 'vue'
// import axios from 'axios'
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

const getDescription = (source: string, size: number = 80): string => {
  return source.length > size ? source.slice(0, size - 1) + "…" : source
}

</script>

<template>
  <div class="c-articles-list">
    <ArticlesListItem
      v-for="article in articles"
      :key="article.id"
      :article="article"
    >
      <!-- <template #icon>
        <DocumentationIcon />
      </template> -->
      <template #heading>{{ article.title }}</template>

      <div>
        <div>
          {{ getDescription(article.content) }}
        </div>
        <div class="article-props">
          <div class="article-prop">Author: <b>{{ article.authorName }}</b></div>
          <div class="article-prop">Rating: <b>{{ article.totalLikes }}</b></div>
        </div>
      </div>
    </ArticlesListItem>
  </div>
</template>

<style scoped>
.article-prop {
  display: inline-block;
  padding: 0 1rem;
  font-size: 0.8rem;
}

.article-prop:first-child {
  padding-left: 0;
}

.article-prop:not(:first-child) {
  border-left: 1px solid var(--color-border);
}
</style>
