<script>
  import Nav from "$lib/Nav.svelte"
</script>

<div class="containers">
  <Nav />
  <slot></slot>
</div>

<style>
  .containers {
    height: 100vh;
    background-color: lightblue;
  }
</style>