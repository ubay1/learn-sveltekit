<script context="module">
export const load = ({page}) => {
  
  const dataFiles = page.params.id
  const dataSearch = page.query.get("q")

  return {
    props: {
      dataFiles,
      dataSearch
    }
  }
}
</script>
<script>
  export let dataFiles; 
  export let dataSearch;
</script>

<svelte:head>
	<title>Blog - {dataFiles}</title>
</svelte:head>

<p>
  {dataFiles}
  {dataSearch}
</p>