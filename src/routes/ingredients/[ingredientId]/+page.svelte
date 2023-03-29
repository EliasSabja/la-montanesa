<script lang="ts">
  import { onMount } from 'svelte';
  import { Container } from 'sveltestrap';
  import { page } from '$app/stores';
  import { getIngredientById } from '$lib/api/ingredients';
  import type { Ingredient } from '$lib/schemas/ingredient.schema'; 
  import Card from '$lib/components/card/IngredientCard.svelte';

  const ingredientId = $page.params.ingredientId;
  let ingredient: Ingredient;
  console.log($page.params);
  
  onMount(async () => {
    ingredient = await getIngredientById(ingredientId);     
    console.log(ingredient);
  });
</script>


<main>
  <Container fluid style="max-width:100%">
  {#if ingredient}
    <Card ingredient={ingredient}/>
  {/if}
  </Container>
</main>
