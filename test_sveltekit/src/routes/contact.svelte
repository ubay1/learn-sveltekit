<script>
  let name;
  let email;
  let message = "";
  let error = "";

  const submitForm = async () => {
    try {
      const submit = await fetch('/api/contact', {
        method: 'post',
        body: JSON.stringify({
          name,
          email
        })
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
  <h1 class="text-red-600">
    contact
  </h1>
  
  {JSON.stringify(message)}
  
  <form on:submit|preventDefault={submitForm} method="post">
    <div class="flex flex-col py-4">
      <label class="w-16" for="name">Name:</label>
      <input type="text" name="name" class="w-full h-11 px-2 focus:outline-transparent" bind:value={name}>
    </div>
    <div class="flex flex-col py-4">
      <label class="w-16" for="email">Email:</label>
      <input type="email" name="email" class="w-full h-11 px-2 focus:outline-transparent" bind:value={email}>
    </div>

    <div>
      <button type="submit" class="bg-red-400 p-2 rounded-md text-white hover:bg-red-700">submit</button>
    </div>
  </form>
</div>