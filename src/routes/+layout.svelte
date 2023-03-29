<script>
  import "$lib/styles/reset.css";
  import "$lib/styles/global.css";
  import "$lib/styles/syntax-highlight.css";
  import SidebarToggle from "$lib/components/sidebar/SidebarToggle.svelte";
  import Sidebar from "$lib/components/sidebar/Sidebar.svelte";
  import { isSidebarOpen } from "$lib/stores";
  import Header from "$lib/components/Header.svelte";
  import SearchBar from "$lib/components/search/SearchBar.svelte";
</script>

<div class="wrapper overflow-hidden">
  <Sidebar />
  <main class:show={$isSidebarOpen}>
    <SidebarToggle />
    <Header />
    <SearchBar />
    <article class="container">
      <slot />
    </article>
  </main>
</div>

<style>
  .wrapper {
    display: flex;
    overflow: hidden;
  }
  main {
    width: 100%;
  }
  article {
    margin: 2rem auto;
  }
  .show {
    transform: translateX(18rem);
  }
  @media screen and (max-width: 800px) {
    .show {
      transform: translateX(14rem);
    }
  }
</style>
