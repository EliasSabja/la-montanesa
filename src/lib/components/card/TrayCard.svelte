<script lang="ts">
	import type { Tray } from "$lib/schemas/tray.schema";
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
  export let tray: Tray;
</script>

<main> 
  <Card class="mb-3">
    <CardHeader>
      <CardTitle class="text-center">{tray.name}</CardTitle>
    </CardHeader>
    <CardBody class="text-center">
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
     
    </CardBody>
    <CardFooter>
      <CardSubtitle style="font-size: 20px;text-align: center;"> ${tray.price} </CardSubtitle>
    </CardFooter>
  </Card> 
</main>
