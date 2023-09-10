<script setup lang="ts">
import type { IAuthorListItem } from '@/interfaces/authors/IAuthorListItem'
import AuthorAvatar from '@/components/authors/AuthorAvatar.vue'

interface IProps{
  authors: IAuthorListItem[]
}

const props = defineProps<IProps>()
</script>

<template>
  <div class="c-authors-list">
    <div
      v-for="author in props.authors"
      :key="author.id"
      class="item"
    >
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
        <div>
          <div class="author-props">
            <div class="author-prop">Articles: <b>{{ author.totalArticles }}</b></div>
            <div class="author-prop">Rating: <b>{{ author.rating }}</b></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px solid var(--color-border);
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

.author-prop {
  display: inline-block;
  padding: 0 1rem;
  font-size: 0.8rem;
}

.author-prop:first-child {
  padding-left: 0;
}

.author-prop:not(:first-child) {
  border-left: 1px solid var(--color-border);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
  }
}
</style>
