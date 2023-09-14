<script setup lang="ts">
import type { IAuthorListItem } from '@/interfaces/authors/IAuthorListItem'
import { useHttp } from '@/plugins/api'
import { onMounted, ref } from 'vue'
import AuthorAvatar from '@/components/authors/AuthorAvatar.vue'

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
</script>

<template>
  <div class="c-top-authors">
    <div class="top-authors-header">
      POPULAR AUTHORS
    </div>
    <div class="popular-author-item" v-for="author in popularAuthors" :key="author.id">
      <div class="author-avatar-wrapper">
        <AuthorAvatar
          :first-name="author.firstName"
          :last-name="author.lastName"
        />
      </div>
      <div>
        <RouterLink :to="{name: 'authorDetails', params: { id: author.id }}">
          {{ author.firstName }} {{ author.lastName }}
        </RouterLink>
        <!-- <div class="author-rating">Rating: {{ author.rating }}</div> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.c-top-authors {
  padding: 1rem 2rem;
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


.author-avatar-wrapper {
  flex: 0;
  margin-right: 1rem;
}
</style>
