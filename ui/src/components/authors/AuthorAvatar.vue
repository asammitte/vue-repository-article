<script setup lang="ts">
import { computed } from 'vue'

interface IProps{
  firstName: string,
  lastName: string
}

const props = defineProps<IProps>()

const getInitials = computed(() => {
  return props.firstName.substring(0, 1) + props.lastName.substring(0, 1)
})
</script>

<template>
  <div class="c-author-avatar">
    <div class="author-avatar">
      {{ getInitials }}
    </div>
  </div>
</template>

<style scoped>
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
</style>
