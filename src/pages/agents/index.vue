<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend'

const agentListe = await pb.collection("Agent").getFullList()
console.log(agentListe);

</script>

<template>
  <h1 class="text-2xl">Tous les agents</h1>
<ul>
  <li v-for="unAgent of agentListe" :key="unAgent.id">
    <RouterLink
      :to="{
        name: '/agents/[id]',
        params: {
          id: unAgent.id
        }
      }"
      class="text-red-400 hover:text-red-600"
    >
      {{ unAgent.nom + ' ' + unAgent.prenom}}
    </RouterLink>
  </li>
</ul>
</template>
