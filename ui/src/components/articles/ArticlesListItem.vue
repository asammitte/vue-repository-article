<script setup lang="ts">
import { computed } from 'vue'
import type { IArticleListItem } from '@/interfaces/articles/IArticleListItem';

interface IProps{
  article : IArticleListItem
}

const props = defineProps<IProps>()

const userInitials = computed(() => props.article.authorName.substring(0, 2))
</script>

<template>
  <div class="item">
    <div class="article-avatar-wrapper">
      <div class="article-avatar">
        {{  userInitials }}
      </div>
    </div>
    <div class="article-details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
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
}

.article-details {
  flex: 1;
  margin-left: 1rem;
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

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem 0;
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
