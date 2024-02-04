<script setup lang="ts">
import type { IStrapiRecipe } from '~/models/search.model';

interface IProps {
  recipe: IStrapiRecipe;
}

const { recipe } = defineProps<IProps>();

onMounted(() => {
  console.log(recipe);
});

</script>

<template>
    <div class="bg-zinc-950 text-slate-50 rounded-md p-4 w-80 mx-2">
      <h2 class="font-bold uppercase text-lg font-mono">{{ recipe.recipe_name }}</h2>
      <p class="text-sm">{{ recipe.recipes_description }}</p>
      <NuxtLink :to="`/recipes/${recipe.id}`" class="text-sm no-underline bg-green-500 text-zinc-950 px-4 rounded-sm">
        voir plus
      </NuxtLink>
    </div>
</template>