<script lang="ts">
  import { onMount } from 'svelte';
  import { Container } from 'sveltestrap';
  import { page } from '$app/stores';
  import { getTrayById } from '$lib/api/trays';
  import type { Tray } from '$lib/schemas/tray.schema'; 
  import type { Course } from '$lib/schemas/course.schema';
  import Card from '$lib/components/card/TrayCard.svelte';
  import CourseList from '$lib/components/list/CourseList.svelte';
  import { getCourseById } from '$lib/api/courses';

  const trayId = $page.params.trayId;
  let tray: Tray;
  let courses: Course[];
  
  onMount(async () => {
    tray = await getTrayById(trayId);     
    await getCoursesData();
  });

  async function getCoursesData() {
    const coursesData: Course[] = [];
    await Promise.all(tray.courses.map( async(course) => {
      const courseData = await getCourseById(course.id); 
      coursesData.push(courseData);
    }));

    courses = coursesData;
  }
</script>


<main>
  <Container fluid style="max-width:100%">
  {#if tray}
    <Card tray={tray}/>
    <CourseList courses={courses}/>
  {/if}
  </Container>
</main>
