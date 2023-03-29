<script lang="ts">
  import type { Course } from '$lib/schemas/course.schema'; 
  import { Row, Col } from 'sveltestrap'; 
  import { afterUpdate } from 'svelte';

  export let courses: Course[];
  let groupedCourses = [];

  function groupCourses(courses: Course[], groupSize: number) {
    if (!courses) return [];
    const groups = [];
    for (let i = 0; i < courses.length; i += groupSize) {
      groups.push(courses.slice(i, i + groupSize));
    }
    return groups;
  }

  afterUpdate(async () => {
    groupedCourses = groupCourses(courses, 3);
  });

</script>

<main>
  {#each groupedCourses as coursesGroup}
  <Row>                                                                         
    <div class="container mx-auto mt-4 h-100">                                          
      <div class="row row-cols-3">                                                            
      {#each coursesGroup as course}
        {@const courseUrl = `/courses/${course.id}`}
          <div class="col">                                                      
            <div class="card d-flex flex-column justify-content-between">                                  
              <img src={course.img_url} class="card-img-top" alt="...">    
              <div class="card-body">                                                       
                <h5 class="card-title text-muted">{course.name}</h5>                      
                <h6 class="card-subtitle ">{course.category}</h6>                       
                <div class="button-container">                                              
                  <Col>
                  <h6 class="card-subtitle text-muted mt-2">${course.price}</h6>                       
                  </Col>
                  <Col>
                  <a href={courseUrl} class="btn btn-light">Ver detalles</a>     
                  </Col>
                </div>                                                                      
              </div>                                                                        
            </div>
          </div>
      {/each}
      </div>
    </div>
  </Row> 
  {/each}
</main>


<style>
  .card {
    background: #222;
    border: 1px solid gray;
    color: rgba(250, 250, 250, 0.8);
    margin-bottom: 0.5rem;
    height: 450px;
  }

  .card-body {
      text-align: center;
    }

  .button-container {
    height: 100px;
    text-align: center;
  }
  
  .button-container h6 {
    position: absolute;
    bottom: 35px;
    left: 10%;
    }

  .btn {
    position: absolute;
    bottom: 35px;
    left: 50%;
  }

  img {
    height: 250px;
  }

</style>
