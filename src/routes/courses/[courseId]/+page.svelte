<script lang="ts">
  import { onMount } from 'svelte';
  import { Container } from 'sveltestrap';
  import { page } from '$app/stores';
  import { getCourseById } from '$lib/api/courses';
  import type { Course } from '$lib/schemas/course.schema'; 
  import Card from '$lib/components/card/CourseCard.svelte';
  import IngredientList from '$lib/components/list/IngredientList.svelte';
  import type { Ingredient } from '$lib/schemas/ingredient.schema';
  import { getIngredientById } from '$lib/api/ingredients';

  let courseId = $page.params.courseId;
  let course: Course;
  let ingredients: Ingredient[] = [];
  
  onMount(async () => {
    course = await getCourseById(courseId);     
    await getIngredientsData();
  });

  async function getIngredientsData() {
    const ingredientsData: Ingredient[] = [];
    await Promise.all(course.ingredients.map( async (ingredient) => {
      const ingredientData = await getIngredientById(ingredient.id);
      ingredientsData.push(ingredientData);
    }));

    ingredients = ingredientsData;
  }
    
</script>


<main>
  <Container fluid style="max-width:100%">
  {#if course}
    <Card course={course}/>
    <IngredientList ingredients={ingredients}/>
  {/if}
  </Container>
</main>
