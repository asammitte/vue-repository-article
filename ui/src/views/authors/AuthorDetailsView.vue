<script setup lang="ts">
import type { IAuthorDetails } from '@/interfaces/authors/IAuthorDetails'
import { onMounted, ref } from 'vue'
import { useHttp } from '@/plugins/api'
import { useRoute } from 'vue-router'
import AuthorDetailsCard from '@/components/authors/AuthorDetailsCard.vue'

const api = useHttp()
const route = useRoute()
const authorDetails = ref<IAuthorDetails>()

onMounted((): void => {
  fetchAuthors()
})

const fetchAuthors = async (): Promise<void> => {
  const authorId = +route.params.id
  await api.authors.get(authorId)
    .then(data => authorDetails.value = data)
    .catch(ex => console.log(ex.code))
}
</script>

<template>
  <div class="c-page c-author-details-page">
    <div class="page-content-main">
      <author-details-card
        v-if="authorDetails"
        :author="authorDetails"
      />
    </div>
    <div class="page-content-right"></div>
  </div>
</template>
