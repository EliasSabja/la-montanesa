<script>
  import { isSidebarOpen } from "$lib/stores";
  import Footer from "$lib/components/sidebar/Footer.svelte";
  import Nav from "$lib/components/sidebar/Nav.svelte";
</script>

<div class="sidebar" class:show={$isSidebarOpen}>
  <div class="wrapper">
    <h1>La montañesa</h1>
  </div>
  <Nav />
  <div class="wrapper">
    <Footer />
  </div>
</div>

<style>
  .sidebar {
    position: fixed;
    display: flex;
    flex-direction: column;
    left: -18rem;
    width: 18rem;
    height: 100vh;
    background-color: var(--sidebar-bg);
    font-size: 1rem;
    z-index: 9999;
  }
  
  h1 {
    color: #ddd;
    font-weight: bold;
    font-size: 2rem;
  }
  .show {
    transform: translateX(18rem);
    box-shadow: 0 10px 5px var(--sidebar-bg);
  }
  .wrapper {
    padding: 2rem;
  }
  @media screen and (max-width: 800px) {
    .sidebar {
      left: -20rem;
      width: 20rem;
    }
    .show {
      transform: translateX(20rem);
    }
  }
</style>

