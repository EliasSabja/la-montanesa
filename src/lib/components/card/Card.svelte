<script lang="ts">
	import type { Tray } from "$lib/schemas/tray.schema";
  import {
    Button,
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
  export let tray: Tray;
</script>

<main> 
  <Card class="mb-3">
    <CardHeader>
      <CardTitle class="text-center">{tray.name}</CardTitle>
    </CardHeader>
    <CardBody>
      <CardSubtitle>Descripcion:</CardSubtitle>
      <CardText class="h6"> {tray.description}</CardText>

      <Row>
      <Col xs="6">
      <CardSubtitle>Expiracion: </CardSubtitle>
      <CardText class="h6"> {tray.price}</CardText>
      </Col>
      <Col xs="6">
      <CardSubtitle>Tamaño: </CardSubtitle>
      <CardText class="h6"> {tray.size}</CardText>
      </Col>
      </Row>
     
      <div class="d-flex justify-content-center">
        <Button class="text-center">Ver detalles</Button>
      </div>
    </CardBody>
    <CardFooter>
      <CardSubtitle> ${tray.price} </CardSubtitle>
    </CardFooter>
  </Card> 
</main>
