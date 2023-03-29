<script lang="ts">
	import type { Course } from "$lib/schemas/course.schema";
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
  export let course: Course;
</script>

<main> 
  <Card class="mb-3">
    <CardHeader class="text-center">
      <CardTitle>{course.name}</CardTitle>
      <CardSubtitle>{course.category}</CardSubtitle>
    </CardHeader>
    <CardHeader class="text-center"> <img src={course.img_url} alt="Imagen no encontrada"> </CardHeader>
    <CardBody class="text-center">
      <CardText class="h6"> {course.description}</CardText>
      <Row>
      <Col xs="6">
      <CardSubtitle>Expiracion: </CardSubtitle>
      <CardText class="h6"> {course.price}</CardText>
      </Col>
      <Col xs="6">
      <CardSubtitle>Tamaño: </CardSubtitle>
      <CardText class="h6"> {course.size}</CardText>
      </Col>
      </Row>
     
    </CardBody>
    <CardFooter>
      <CardSubtitle style="font-size: 25px;text-align: center;"> ${course.price} </CardSubtitle>
    </CardFooter>
  </Card> 
</main>


<style>
  img {
    width: 350px;
  }
</style>
