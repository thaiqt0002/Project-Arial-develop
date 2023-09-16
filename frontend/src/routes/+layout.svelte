<script>
  import "../app.css";
  import Header from './Header.svelte';
</script>

<div class="app">
  <Header/>

  <main>
    <slot/>
  </main>

  <footer>
    <p>Visit <a href='https://www.ielts.org/'>official website</a> for more information</p>
  </footer>
</div>

<style>
  .app {
    display:flex;
    flex-direction:column;
    min-height: 100vh;
  }

  main {
    flex:1;
    display:flex;
    flex-direction:column;
  }

  footer {
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:12px;
  }

  footer a {
    font-weight:bold;
    color:red;
  }
</style>