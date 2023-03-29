<script lang="ts">
  import type { Tray } from '$lib/schemas/tray.schema'; 
  import { Row, Col } from 'sveltestrap'; 
  import { afterUpdate } from 'svelte';

  export let trays: Tray[];
  let groupedTrays = [];

  function groupTrays(trays: Tray[], groupSize: number) {
    const groups = [];
    for (let i = 0; i < trays.length; i += groupSize) {
      groups.push(trays.slice(i, i + groupSize));
    }
    return groups;
  }

  afterUpdate(() => {
    groupedTrays = groupTrays(trays, 3);
  });

</script>

<main>
  {#each groupedTrays as traysGroup}
  <Row>                                                                         
    <div class="container mx-auto mt-4 h-100">                                          
      <div class="row row-cols-3">                                                            
      {#each traysGroup as tray}
        {@const mainCourse = tray.courses.find(course => course.category === 'dish')}
        {@const trayUrl = `/trays/${tray.id}`}
          <div class="col">                                                      
            <div class="card d-flex flex-column justify-content-between">                                  
              <img src={mainCourse.img_url} class="card-img-top" alt="...">    
              <div class="card-body">                                                       
                <h5 class="card-title text-muted">{tray.name}</h5>                      
                <div class="button-container">                                              
                  <Col>
                    <h6 class="card-subtitle text-muted mt-2">${tray.price}</h6>
                  </Col>
                  <Col>
                    <a href={trayUrl} class="btn btn-light">Ver detalles</a>     
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
    height: 420px;
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
    bottom: 40px;
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
