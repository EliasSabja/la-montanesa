<script lang="ts">
  import { onMount } from 'svelte';
  import { Spinner } from 'sveltestrap';
  import { getIngredientsFromApi } from '$lib/api/ingredients';
  //import { searchIngredientsApiRequest } from '$lib/api/searchIngredients';
	import type { Ingredient } from '$lib/schemas/ingredient.schema';
  import Pagination from '$lib/components/pagination/Pagination.svelte';
  import type { SortType } from '$lib/schemas/sort.schema';
  import type { OrderType } from '$lib/schemas/order.schema';
  import SortComponent from '$lib/components/sort/Sort.svelte';
  import IngredientList from '$lib/components/list/IngredientList.svelte';

  let currentPage = 1;
  let pages = 1;
  let ingredients: Ingredient[] = [];
  let loading = false;

  let sort: SortType = 'name';
  let order: OrderType = 'asc';

  onMount(async () => {
    await getIngredientsDataFromApi();
    //const ingredientSearchList = await searchIngredientsApiRequest("a");
    //console.log(ingredientSearchList); 
  });

  async function getIngredientsDataFromApi() {
    loading = true;

    const ingredientsData = await getIngredientsFromApi(sort, order, currentPage, 12); 
    if (ingredientsData) {
      ingredients = ingredientsData.ingredients;
      pages = ingredientsData.pages;
      loading = false;
    }
  }

  async function setPage(page: number) {
    currentPage = page;
    await getIngredientsDataFromApi();
  }

  async function setSort(newSort: SortType) 
  {
    sort = newSort;
    currentPage = 1;
    await getIngredientsDataFromApi();
  }

  async function setOrder(newOrder: OrderType) 
  {
    order = newOrder;
    currentPage = 1;
    await getIngredientsDataFromApi();
  }
  
</script>

<main> 
  <h2 class="text-center"> Ingredientes disponibles </h2>
  <br>
  <SortComponent sort={sort} order={order} setSort={setSort} setOrder={setOrder}/>
  <br>
  <Pagination page={currentPage} pages={pages} setPage={setPage}/>
  <br>
  <div style="text-align:center">
  {#if loading} 
    <Spinner type="border" color="dark" />
    {/if}
  </div>
  <IngredientList bind:ingredients={ingredients} />
  <br>
  <Pagination page={currentPage} pages={pages} setPage={setPage}/>
</main>
