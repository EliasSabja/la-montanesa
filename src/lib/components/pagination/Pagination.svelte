 <script lang="ts">
  import { afterUpdate } from 'svelte';
  import { Pagination, PaginationItem, PaginationLink } from 'sveltestrap';
  import { getPaginationNumbers } from '$lib/functions/getPaginationNumbers';

  export let page: number;
  export let pages: number;
  export let setPage: (page: number) => void;

  let paginationNumbers: number[] = [];
  
  afterUpdate(() => {
    paginationNumbers = getPaginationNumbers(page, pages);
  });

  async function goToPage(page) {
    await setPage(page);
  }
</script> 

<main>
  <div class="d-flex justify-content-center">
    <Pagination ariaLabel="Page navigation example">
      <PaginationItem>
        <PaginationLink on:click={() => goToPage(1)} first/>
      </PaginationItem>
      {#each paginationNumbers as number}
        <PaginationItem active={number === page}>
          <PaginationLink on:click={() => goToPage(number)} class="bg-light text-dark">{number}</PaginationLink>
        </PaginationItem>
      {/each}
      <PaginationItem>
        <PaginationLink on:click={() => goToPage(pages)} last/>
      </PaginationItem>
    </Pagination>
  </div>
</main>

