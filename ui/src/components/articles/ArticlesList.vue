<script setup lang="ts">
import type { IArticleListItem } from '@/interfaces/articles/IArticleListItem'

interface IProps{
  articles: IArticleListItem[]
}

const props = defineProps<IProps>()

const getDescription = (source: string, size: number = 80): string => {
  return source.length > size ? source.slice(0, size - 1) + "…" : source
}
</script>

<template>
  <div class="c-articles-list">
    <div
      v-for="article in props.articles"
      :key="article.id"
      class="item"
    >
      <div class="article-details">
        <h3>
          {{ article.title }}
        </h3>
        <div>
          <div>
            {{ getDescription(article.content) }}
          </div>
          <div class="article-props">
            <div class="article-prop">Author: <b>{{ article.authorName }}</b></div>
            <div class="article-prop">Likes: <b>{{ article.totalLikes }}</b></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px solid var(--color-border);
  cursor: default;
  padding: 0.4rem 0 1rem 0;
}

.article-details {
  flex: 1;
}

.article-avatar-wrapper {
  flex: 0;
}

.article-avatar {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  text-transform: uppercase;

  color: black;
  background-color: var(--color-border-hover);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

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

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
  }
}
</style>
