<script setup lang="ts">
  import { pb } from '@/backend'
  import { useRoute } from 'vue-router/auto'
import type { AgentResponse, MaisonResponse } from '@/pocketbase-types';

  const route = useRoute('/agents/[id]')
  console.log('id :', route.params.id)

const maisonsDeAgente = await pb.collection<AgentResponse<{Maison:MaisonResponse[]}>>("Agent").getOne(route.params.id, {expand: "Maison"});
console.log(maisonsDeAgente);

</script>
<template>
  <div>
    <h1 class="text-xl">Masions d'un agente</h1>
    <div v-if="maisonsDeAgente.expand">
      <ul>
        <li v-for="uneMaison of maisonsDeAgente.expand.Maison" :key="uneMaison.id">
          <RouterLink
            :to="{
              name: '/offres/[id]',
              params: {
                id: uneMaison.id
              }
            }"
            class="text-red-400 hover:text-red-600">
            {{ uneMaison.nomMaison }}
          </RouterLink>
        </li>
      </ul>
</div>
 </div>
</template>