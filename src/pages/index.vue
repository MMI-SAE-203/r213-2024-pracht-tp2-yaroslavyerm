<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import MaisonCard from '@/components/MaisonCard.vue'
import { pb } from '@/backend'

const maisonListe = await pb.collection("Maison").getFullList({
  filter: "favori = true",
})
console.log(maisonListe);

</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
<MaisonCard v-for="maisonRecord in maisonListe" :key="maisonRecord.nomMaison" v-bind="maisonRecord" />
</template>
