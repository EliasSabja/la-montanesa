<script lang="ts">
	import type { Ingredient } from "$lib/schemas/ingredient.schema";
  import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardSubtitle,
    CardText,
    CardTitle,
    Row,
    Col,
  } from 'sveltestrap';
  export let ingredient: Ingredient;
</script>

<main> 
  <Card class="mb-3">
    <CardHeader class="text-center">
      <CardTitle>{ingredient.name}</CardTitle>
    </CardHeader>
    <CardHeader class="text-center"> <img src={ingredient.img_url} alt="Imagen no encontrada"> </CardHeader>
    <CardBody class="text-center">
      <CardText class="h6"> {ingredient.description}</CardText>
      <Row>
      <Col xs="6">
      <CardSubtitle>Expiracion: </CardSubtitle>
      <CardText class="h6"> {ingredient.price}</CardText>
      </Col>
      <Col xs="6">
      <CardSubtitle>Tamaño: </CardSubtitle>
      <CardText class="h6"> {ingredient.size}</CardText>
      </Col>
      </Row>
     
    </CardBody>
    <CardFooter>
      <CardSubtitle style="font-size: 25px;text-align: center;"> ${ingredient.price} </CardSubtitle>
    </CardFooter>
  </Card> 
</main>


<style>
  img {
    width: 350px;
  }
</style>
