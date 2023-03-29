<script lang="ts">
  import { searchCoursesFromApi } from '$lib/api/courses';
  import { searchTraysFromApi } from '$lib/api/trays';
  import { searchIngredientsFromApi } from '$lib/api/ingredients';
  import type { SearchItem } from '$lib/schemas/search.schema';
  import { goto } from '$app/navigation';

  let searchValue = '';
  let searchList: SearchItem[] = [];
  let selectedItem: SearchItem; 

  async function handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const name = target.value;

    await getDataFromApi(name);
  }

  function handleSelection(event: Event) {
    const target = event.target as HTMLInputElement;
    const name = target.value;
    selectedItem = searchList.find((item) => item.name === name);
    
    goto(`/${selectedItem.category}/${selectedItem.id}`);
  }

  async function getDataFromApi(name: string) {
      const trays = await searchTraysFromApi(name);
      const courses = await searchCoursesFromApi(name);
      const ingredients = await searchIngredientsFromApi(name);

      searchList = [...trays, ...courses, ...ingredients];
    }

</script>

<main>
<div class="w-50 mt-4 m-auto input-group rounded">
  <input type="search" class="form-control rounded" placeholder="Search" list="search-results" aria-label="Search" aria-describedby="search-addon" bind:value={searchValue} on:input={handleInput}/>
  <span class="input-group-text border-0" id="search-addon">
    <img height='20' src='/search-symbol.png' alt="icon"/>
  </span>
  <datalist id="search-results">
  {#each searchList as result}
    <option value={result.name}/>
  {/each}
</datalist>
  <select on:change={handleSelection} class="w-50">
  {#each searchList as result}
    <option value={result.name}> {result.name} </option>
  {/each}
  </select>

</div>
</main>

