<script context="module">
  export const load = ({error, status}) => {
    return {
      props: {
        error,
        status
      }
    }
  }
</script>
<script>
  export let error, status;
</script>

<h1 class="text-xl font-bold">{JSON.stringify(error)} {status}</h1>