<script lang="ts" setup>
import type { IStrapiRecipe } from '~/models/search.model';
import RecipeListElement from '~/components/RecipeListElement.vue';

const { find } = useStrapi()
const recipes = ref<any[]>([])



onMounted(() => {
  find<IStrapiRecipe>('Recipes')
  .then((res) => {
    console.log(res)
    recipes.value = res.data
  })
  .catch(err => console.error(err))
})

</script>

<template>
  <div class="border-1 border-solid border-slate-950 rounded-md p-12 w-90% flex items-center justify-start">
    <RecipeListElement v-for="recipe in recipes" :key="recipe.id" :recipe="recipe"/>
  </div>
</template>
