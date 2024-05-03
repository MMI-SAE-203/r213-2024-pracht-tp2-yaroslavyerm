<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { maisonRecord } from '@/types'

const maisonListe : maisonRecord [] = [
  {
    "adresse": "123 Rue Principale",
    "collectionId": "dc4i7b7ouwdl0zb",
    "collectionName": "Maison",
    "created": "2024-04-12 08:41:43.109Z",
    "favori": true,
    "id": "65bhl532dlta6ir",
    "images": "13_paint_colors_for_your_white_brick_house_chrissy_marie_blog_2p6K4E0GVM.jpg",
    "nbChambres": 3,
    "nbSdb": 2,
    "nomMaison": "Villa Ensoleillée",
    "prix": 350000,
    "surface": 180,
    "updated": "2024-04-29 14:17:21.042Z"
  },
  {
    "adresse": "456 Avenue des Ormes",
    "collectionId": "dc4i7b7ouwdl0zb",
    "collectionName": "Maison",
    "created": "2024-04-12 08:44:13.080Z",
    "favori": false,
    "id": "nxwlnfueguwa64l",
    "images": "exterior_trim_white_is_nautical_yellow_is_heritage_maria_killam_T0mDqUN85h.jpg",
    "nbChambres": 2,
    "nbSdb": 1,
    "nomMaison": "Cottage Confortable",
    "prix": 250000,
    "surface": 120,
    "updated": "2024-04-29 14:17:15.589Z"
  },
  {
    "adresse": "789 Avenue du Lac",
    "collectionId": "dc4i7b7ouwdl0zb",
    "collectionName": "Maison",
    "created": "2024-04-12 08:45:52.517Z",
    "favori": true,
    "id": "pc4zq4nutz9gx5l",
    "images": "see_how_this_couple_designed_a_georgia_lake_house_made_for_all_year_living_tg14ThRPok.jpg",
    "nbChambres": 4,
    "nbSdb": 3,
    "nomMaison": "Retraite au Bord du Lac",
    "prix": 500000,
    "surface": 250,
    "updated": "2024-04-29 14:17:03.388Z"
  },
  {
    "adresse": "101 Route de la Montagne",
    "collectionId": "dc4i7b7ouwdl0zb",
    "collectionName": "Maison",
    "created": "2024-04-12 08:47:01.847Z",
    "favori": true,
    "id": "fygo9io4v3gaftz",
    "images": "touring_70_strikingly_beautiful_forest_homes_mWUuF5dV3n.jpg",
    "nbChambres": 5,
    "nbSdb": 4,
    "nomMaison": "Manoir avec Vue sur la Montagne",
    "prix": 700000,
    "surface": 350,
    "updated": "2024-04-29 14:16:49.158Z"
  },
  {
    "adresse": "246 Rue du Chêne",
    "collectionId": "dc4i7b7ouwdl0zb",
    "collectionName": "Maison",
    "created": "2024-04-12 08:54:21.757Z",
    "favori": false,
    "id": "crs6mltitbnfxry",
    "images": "hayloft_in_kyiv_ukraine_designed_by_loft_buro_PKohk0lhCB.jpg",
    "nbChambres": 1,
    "nbSdb": 1.5,
    "nomMaison": "Loft Urbain",
    "prix": 400000,
    "surface": 100,
    "updated": "2024-04-29 14:16:32.217Z"
  }
]
console.log(maisonListe);

</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
</template>
