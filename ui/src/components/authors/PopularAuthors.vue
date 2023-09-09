<script setup lang="ts">
import type { IAuthorListItem } from '@/interfaces/authors/IAuthorListItem'
import { useHttp } from '@/plugins/api'
import { onMounted, ref } from 'vue'

const api = useHttp()
const popularAuthors = ref<IAuthorListItem[]>()

onMounted((): void => {
  fetchPopularAuthors()
})

const fetchPopularAuthors = async (): Promise<void> => {
  await api.authors.getPopular()
    .then(res => popularAuthors.value = res)
    .catch(ex => console.log(ex))
}

const userInitials = (firstName: string, lastName: string): string => {
  return firstName.substring(0, 1) + lastName.substring(0, 1)
}
</script>

<template>
  <div class="c-top-authors">
    <div class="top-authors-header">
      POPULAR AUTHORS
    </div>
    <div class="popular-author-item" v-for="author in popularAuthors" :key="author.id">
      <div class="article-avatar-wrapper">
        <div class="article-avatar">
          {{ userInitials(author.firstName, author.lastName) }}
        </div>
      </div>
      <div>
        {{ author.firstName }} {{ author.lastName }}
        <div class="author-rating">Rating: {{ author.rating }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.c-top-authors {
  padding: 1rem;
}

.top-authors-header {
  font-weight: bolder;
}

.popular-author-item {
  display: flex;
  align-items: center;
  margin: 0.25rem 0 0.5rem 0;
}

.author-rating {
  font-size: 0.8rem;
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
  margin-right: 1rem;

  color: black;
  background-color: var(--color-border-hover);
}
</style>
