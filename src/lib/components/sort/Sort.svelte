<script lang="ts">
  import { Row, Col } from "sveltestrap";
  import type { SortType } from "$lib/schemas/sort.schema";
  import type { OrderType } from "$lib/schemas/order.schema";

  export let sort: string;
  export let setSort: (sort: SortType) => void;
  export let order: string;
  export let setOrder: (order: OrderType) => void;
</script>

<main>
  <Row>
    <Col>
      <label for="sort">Ordenar por</label>
      <select
        id="sort"
        bind:value={sort}
        on:change={() => setSort(sort)}
        class="form-control"
      >
        <option value="name">Nombre</option>
        <option value="price">Precio</option>
      </select>
    </Col>
    <Col>
      <label for="order">Orden</label>
      <select
        id="order"
        bind:value={order}
        on:change={() => setOrder(order)}
        class="form-control"
      >
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>
    </Col>
  </Row>
</main>
