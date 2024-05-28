<script setup lang="ts">
import { pb } from '@/backend'
import { useRouter } from 'vue-router/auto'
const router = useRouter()
const submit = async (formData: { [key: string]: any; } | FormData | undefined) => {
  try {
    const newMaison = await pb.collection('maison').create(formData)
    router.push({ name: '/offres/[id]', params: { id: newMaison.id } })
  } catch (error) {
    console.error("Error creating maison:", error)
  }
}

fileInput.addEventListener('change', function () {
    for (let file of fileInput.files) {
        formData.append('image', formData.image[0].file);
    }
});

</script>
<template>
  <h1 class="text-2xl">Créer une nouvelle maison</h1>
  <!-- <form method="post" @submit="submit">
    <div class="mb-1">
      <label for="nomMaison">Nom de la maison</label>
      <input type="text" id="nomMaison" name="nomMaison"  class="border-2 border-black rounded-md ml-1"/>
    </div>
    <div class="mb-1">
      <label for="adresse">Adresse</label>
      <input type="text" id="adresse" name="adresse"  class="border-2 border-black rounded-md ml-1"/>
    </div>
    <div class="mb-1">
      <label for="adresse">Photo</label>
      <input type="file" id="image" name="image" accept="image/png, image/jpeg, image/webp"  class="border-2 border-black rounded-md ml-1"/>
    </div>
    <div class="mb-1">
      <label for="prix">Surface</label>
      <input type="number" id="surface" name="surface"  class="border-2 border-black rounded-md ml-1"/>
    </div>
    <div class="mb-1">
      <label for="prix">Nombre des chambres</label>
      <input type="number" id="nbChambres" name="nbChambres"  class="border-2 border-black rounded-md ml-1"/>
    </div>
    <div class="mb-1">
      <label for="prix">Nombre des salles de bain</label>
      <input type="number" id="nbSdb" name="nbSdb"  class="border-2 border-black rounded-md ml-1"/>
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
  </form> -->

  <FormKit 
    type="form" 
    @submit="submit" 
    method="post" 
    submit-label="Créer">
    <FormKit 
      type="text" 
      id="nomMaison" 
      name="nomMaison" 
      label="Nom de maison" 
      placeholder="Loft Urbain" 
      help="Entrez le nom de maison"/>
    <FormKit 
      type="text" 
      id="adresse" 
      name="adresse" 
      label="Adresse de maison" 
      placeholder="123 Grand Rue" 
      help="Entrez l'adresse de maison"/>
    <FormKit 
      type="file" 
      id="image" 
      name="image" 
      label="Photo"  
      help="Ajoutez une photo"
      multiple="false"
      accept=".png, .jpg, .webp"/>
    <FormKit 
      type="number" 
      id="surface" 
      name="surface" 
      label="Surface"  
      help="Entrez la surface de la maison"
      placeholder="390"/>
    <FormKit 
      type="number" 
      id="nbChambres" 
      name="nbChambres" 
      label="Nombre des chambres"  
      help="Entrez le nombre des chambres"
      placeholder="2"/>
    <FormKit 
      type="number" 
      id="nbSdb" 
      name="nbSdb" 
      label="Nombre des salles de bain"  
      help="Entrez le nombre des salles de bain"
      placeholder="2.5"/>
    <FormKit 
      type="number" 
      id="prix" 
      name="prix" 
      label="Prix"  
      help="Entrez le prix de la maison"
      placeholder="100000"/>
    <FormKit 
      type="checkbox"
      id="favori" 
      name="favori"
      help="Mettre le en favori?"
      label="Favori"/>
  </FormKit>
</template>