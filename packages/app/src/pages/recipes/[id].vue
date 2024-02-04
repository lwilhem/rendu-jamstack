<script setup lang="ts">
import { onMounted } from 'vue';
import type { IStrapiRecipe } from '~/models/search.model';

const route = useRoute()
const { findOne } = useStrapi()
const recipe = ref()

onMounted(() => {
  findOne<IStrapiRecipe>('Recipes', route.params.id as string).then(({data}) => {
    recipe.value = data
  })
})
</script>

<template>
  <div v-if="recipe">
    <h1>{{ recipe.recipe_name }}</h1>
    <p>{{ recipe.recipes_description }}</p>
  </div>
</template>