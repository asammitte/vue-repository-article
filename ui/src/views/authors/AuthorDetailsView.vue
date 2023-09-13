<script setup lang="ts">
import AuthorsList from '@/components/authors/AuthorsList.vue'
import type { IAuthorListItem } from '@/interfaces/authors/IAuthorListItem';
import { onMounted, ref } from 'vue'
import { useHttp } from '@/plugins/api'

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
  <div class="c-page c-author-details-page">
    <div class="page-content-main">
      Author details
    </div>
    <div class="page-content-right"></div>
  </div>
</template>
