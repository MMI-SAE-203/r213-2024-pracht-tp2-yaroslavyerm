<script setup lang="ts">
import { pb } from '@/backend'
import { useRouter } from 'vue-router/auto'
const router = useRouter()
const submit = async (event: Event) => {
  event.preventDefault()
  const form = event.target as HTMLFormElement
  const formData = new FormData(form)
  const newMaison = await pb.collection('maison').create(formData)
  router.push({ name: '/offres/[id]', params: { id: newMaison.id } })
}
</script>
<template>
  <h1 class="text-2xl">Créer une nouvelle maison</h1>
  <form method="post" @submit="submit">
    <div class="mb-1">
      <label for="nomMaison">Nom de la maison</label>
      <input type="text" id="nomMaison" name="nomMaison"  class="border-2 border-black rounded-md ml-1"/>
    </div>
    <div class="mb-1">
      <label for="adresse">Adresse</label>
      <input type="text" id="adresse" name="adresse"  class="border-2 border-black rounded-md ml-1"/>
    </div>
    <div class="mb-1">
      <label for="prix">Prix</label>
      <input type="number" id="prix" name="prix"  class="border-2 border-black rounded-md ml-1"/>
    </div>
    <div class="mb-1">
      <label for="favori">Favori</label>
      <input type="checkbox" id="favori" name="favori" value="true" class="ml-1" />
    </div>
    <button type="submit" class="border-2 border-black rounded-md px-1">Créer</button>
  </form>
</template>