<script lang="ts">
  import type { Ingredient, IngredientsPaginated } from '$lib/schemas/ingredient.schema'; 
  import { Row, Col } from 'sveltestrap'; 
  import { afterUpdate } from 'svelte';

  export let ingredients: IngredientsPaginated[];
  let groupedIngredients = [];
  
  function groupIngredients(ingredients: Ingredient[], groupSize: number) {
    const groups = [];
    for (let i = 0; i < ingredients.length; i += groupSize) {
      groups.push(ingredients.slice(i, i + groupSize));
    }
    return groups;
  }

  afterUpdate(async () => {
    //await getIngredientsData();
    groupedIngredients = groupIngredients(ingredients, 3);
  });
</script>

<main>
  {#each groupedIngredients as ingredientsGroup}
  <Row>                                                                         
    <div class="container mx-auto mt-4 h-100">                                          
      <div class="row row-cols-3">                                                            
      {#each ingredientsGroup as ingredient}
        {@const ingredientUrl = `/ingredients/${ingredient.id}`}
          <div class="col">                                                      
            <div class="card d-flex flex-column justify-content-between">                                  
              <img src={ingredient.img_url} class="card-img-top" alt="...">    
              <div class="card-body">                                                       
                <h5 class="card-title text-muted">{ingredient.name}</h5>                      
                <div class="button-container">                                              
                <Col>
                <h6 class="card-subtitle text-muted mt-2">${ingredient.price}</h6>                       
                </Col>     
                <Col>
                  <a href={ingredientUrl} class="btn btn-light">Ver detalles</a>     
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
    height: 400px;
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
