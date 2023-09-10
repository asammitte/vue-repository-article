<script setup lang="ts">
// import { computed } from 'vue'
import type { IAuthorListItem } from '@/interfaces/authors/IAuthorListItem';

interface IProps{
  author : IAuthorListItem
}

const props = defineProps<IProps>()

const userInitials = (firstName: string, lastName: string): string => {
  return firstName.substring(0, 1) + lastName.substring(0, 1)
}
</script>

<template>
  <div class="item">
    <div class="author-avatar-wrapper">
      <div class="author-avatar">
        {{  userInitials(author.firstName, author.lastName) }}
      </div>
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

.author-avatar {
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

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
