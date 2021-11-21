<script context="module">
  export const load = ({session}) => {
    console.log(session)

    return {
      props: {
        session
      }
    }
  }
</script>

<script>
  import { username } from "../stores";

  let email;
  let message = "";
  let error = "";

  export let session;

  const submitForm = async () => {
    const name = $username
    const parseData = JSON.stringify({name,email})
    try {
      const submit = await fetch('/api/contact', {
        method: 'post',
        body: parseData
      })
  
      const data = await submit.json()
      // console.log(data)
      message = data
    } catch (err) {
      error = err;
    }
  } 
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<div class="px-4">
  session: {JSON.stringify(session.user)}
  <h1 class="text-red-600">
    contact
  </h1>
  
  {JSON.stringify(message)}
  
  <form on:submit|preventDefault={submitForm} method="post">
    <div class="flex flex-col py-4">
      <label class="w-16" for="username">Username:</label>
      <input 
        type="text" 
        name="usernames" 
        class="w-full h-11 px-2 focus:outline-transparent" 
        bind:value={$username}
      >
    </div>
    <div class="flex flex-col py-4">
      <label class="w-16" for="email">Email:</label>
      <input 
        type="email" 
        name="email" 
        class="w-full h-11 px-2 focus:outline-transparent" 
        bind:value={email}
      >
    </div>

    <div>
      <button type="submit" class="bg-red-400 p-2 rounded-md text-white hover:bg-red-700">submit</button>
    </div>
  </form>
</div>