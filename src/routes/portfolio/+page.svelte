<script>
  import Profile from '$lib/components/index_profile.svelte'
  import { fly } from 'svelte/transition'
</script>

<div class="flex flex-col flex-nowrap justify-center xl:flex-row xl:flex-wrap h-feed">
  <div
    in:fly={{ x: 25, duration: 300, delay: 500 }}
    out:fly={{ x: 25, duration: 300 }}
    class="flex-1 w-full max-w-screen-md order-first mx-auto xl:mr-0 xl:ml-8 xl:max-w-md">
    <Profile />
  </div>
</div>
