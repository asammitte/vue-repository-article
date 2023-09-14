<script setup lang="ts">
import type { IAuthorDetails } from '@/interfaces/authors/IAuthorDetails'
import AuthorAvatar from '@/components/authors/AuthorAvatar.vue'

interface IProps{
  author: IAuthorDetails
}

defineProps<IProps>()
</script>

<template>
  <div class="c-authors-details-card">
    <div class="author-info">
      <div class="author-avatar-wrapper">
        <AuthorAvatar
          :first-name="author.firstName"
          :last-name="author.lastName"
        />
      </div>
      <div class="author-details">
        <h3>
          {{ author.firstName }} {{ author.lastName }}
        </h3>
      </div>
    </div>
    <div class="author-stats">
      <ul>
        <li>
          Rating: <b>{{ author.rating }}</b>
        </li>
        <li>
          Articles: <b>{{ author.totalArticles }}</b>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.author-info {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  position: relative;
  cursor: default;
  padding: 0.4rem 0 1rem 0;
}

.author-details {
  flex: 1;
  margin-left: 1rem;
}

.author-details h3 {
  margin-bottom: 0;
}

.author-avatar-wrapper {
  flex: 0;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}
</style>
