<script setup lang="ts">
import { ref, onMounted } from 'vue'
// import axios from 'axios'
import type { ISellerListItem } from '@/interfaces/sellers/ISellerListItem'
import { useHttp } from '@/plugins/api'

const api = useHttp()
const sellers = ref<ISellerListItem[]>([])

onMounted((): void => {
  fetchSellers()
})

const fetchSellers = async (): Promise<void> => {
  await api.sellers.getAll()
    .then(data => sellers.value = data)
    .catch(ex => console.log(ex.code))
}

// const fetchSellers = async (): Promise<void> => {
//  const promise = await axios
//   .get<void>('users')
//   .then(res => sellers.value = res.data)
// }

</script>

<template>
  <div>
    <table>
      <tr v-for="s in sellers" :key="s.id"></tr>
    </table>
    <div v-for="s in sellers" :key="s.id">
      {{ s.name }}
    </div>
  </div>
</template>
