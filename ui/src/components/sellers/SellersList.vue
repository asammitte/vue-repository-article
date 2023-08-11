<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const sellers = ref<ISellersListItem>([])

const fetchSellers = async (): Promise<void> => {
 const promise = await axios
  .get<void>('users')
  .then(res => sellers.value = res.data)
}
</script>