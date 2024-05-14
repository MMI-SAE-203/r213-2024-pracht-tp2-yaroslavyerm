<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend'

const maisonListe = await pb.collection("Maison").getFullList()
console.log(maisonListe);

</script>

<template>
  <h1 class="text-2xl">Toutes les offres</h1>
<ul>
  <li v-for="uneMaison of maisonListe" :v-key="uneMaison.id"> <!-- ask -->
    <RouterLink
      :to="{
        name: '/offres/[id]',
        params: {
          id: uneMaison.id
        }
      }"
      class="text-red-400 hover:text-red-600"
    >
      {{ uneMaison.nomMaison }}
    </RouterLink>
  </li>
</ul>
</template>
