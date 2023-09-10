<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { IAuthorListItem } from '@/interfaces/authors/IAuthorListItem'
import { useHttp } from '@/plugins/api'
import AuthorsListItem from '@/components/authors/AuthorsListItem.vue'

const api = useHttp()
const authors = ref<IAuthorListItem[]>([])

onMounted((): void => {
  fetchAuthors()
})

const fetchAuthors = async (): Promise<void> => {
  await api.authors.getAll()
    .then(data => authors.value = data)
    .catch(ex => console.log(ex.code))
}
</script>

<template>
  <div class="c-authors-list">
    <AuthorsListItem
      v-for="author in authors"
      :key="author.id"
      :author="author"
    />
  </div>
</template>
