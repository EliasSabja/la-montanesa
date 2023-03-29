<script lang="ts">
  import { onMount } from 'svelte';
  import { Spinner } from 'sveltestrap';
  import { getTraysFromApi } from '$lib/api/trays';
  //import { searchTraysApiRequest } from '$lib/api/searchTrays';
	import type { Tray } from '$lib/schemas/tray.schema';
  import Pagination from '$lib/components/pagination/Pagination.svelte';
  import type { SortType } from '$lib/schemas/sort.schema';
  import type { OrderType } from '$lib/schemas/order.schema';
  import SortComponent from '$lib/components/sort/Sort.svelte';
  import MenuList from '$lib/components/list/MenuList.svelte';

  let currentPage = 1;
  let pages = 1;
  let trays: Tray[] = [];
  let loading = false;

  let sort: SortType = 'name';
  let order: OrderType = 'asc';

  onMount(async () => {
    await getTraysDataFromApi();
    //const traySearchList = await searchTraysApiRequest("a");
    //console.log(traySearchList); 
  });

  async function getTraysDataFromApi() {
    loading = true;

    const traysData = await getTraysFromApi(sort, order, currentPage, 12); 
    if (traysData) {
      trays = traysData.trays;
      pages = traysData.pages;
      loading = false;
    }
  }

  async function setPage(page: number) {
    currentPage = page;
    await getTraysDataFromApi();
  }

  async function setSort(newSort: SortType) 
  {
    sort = newSort;
    currentPage = 1;
    await getTraysDataFromApi();
  }

  async function setOrder(newOrder: OrderType) 
  {
    order = newOrder;
    currentPage = 1;
    await getTraysDataFromApi();
  }
  
</script>

<main> 
  <h2 class="text-center"> Menús disponibles </h2>
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
  <MenuList bind:trays={trays} />
  <br>
  <Pagination page={currentPage} pages={pages} setPage={setPage}/>
</main>
