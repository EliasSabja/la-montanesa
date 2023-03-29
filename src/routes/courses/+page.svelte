<script lang="ts">
  import { onMount } from 'svelte';
  import { Spinner } from 'sveltestrap';
  import { getCoursesFromApi } from '$lib/api/courses';
  //import { searchTraysApiRequest } from '$lib/api/searchTrays';
	import type { Course } from '$lib/schemas/course.schema';
  import Pagination from '$lib/components/pagination/Pagination.svelte';
  import type { SortType } from '$lib/schemas/sort.schema';
  import type { OrderType } from '$lib/schemas/order.schema';
  import SortComponent from '$lib/components/sort/Sort.svelte';
  import CourseList from '$lib/components/list/CourseList.svelte';

  let currentPage = 1;
  let pages = 1;
  let courses: Course[] = [];
  let loading = false;

  let sort: SortType = 'name';
  let order: OrderType = 'asc';

  onMount(async () => {
    await getTraysDataFromApi();
    //const courseSearchList = await searchTraysApiRequest("a");
    //console.log(courseSearchList); 
  });

  async function getTraysDataFromApi() {
    loading = true;

    const coursesData = await getCoursesFromApi(sort, order, currentPage, 12); 

    if (coursesData) {
      courses = coursesData.courses;
      pages = coursesData.pages;
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
  <h2 class="text-center"> Platos disponibles </h2>
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
  <CourseList bind:courses={courses} />
  <br>
  <Pagination page={currentPage} pages={pages} setPage={setPage}/>
</main>
