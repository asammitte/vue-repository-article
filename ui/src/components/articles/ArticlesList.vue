<script setup lang="ts">
import { ref, onMounted } from 'vue'
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

// const fetchArticles = async (): Promise<void> => {
//  const promise = await axios
//   .get<void>('users')
//   .then(res => articles.value = res.data)
// }

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
      <template #heading>{{ article.name }}</template>

      <div class="article-props">
        <div class="article-prop">Rating: <b>{{ article.rating }}</b></div>
        <div class="article-prop">Sold items: <b>{{ article.soldItems }}</b></div>
      </div>
    </ArticlesListItem>
  </div>
</template>

<style scoped>
.article-prop {
  display: inline-block;
  padding: 0 1rem;
}

.article-prop:first-child {
  padding-left: 0;
}

.article-prop:not(:first-child) {
  border-left: 1px solid var(--color-border);
}
</style>
