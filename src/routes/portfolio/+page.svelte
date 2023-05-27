<script>
  import Profile from '$lib/components/index_profile.svelte'
  import { fly } from 'svelte/transition'
</script>

<div class="w-full p-4">
  <main class="w-full flex flex-col h-screen content-center justify-center">
    <div class="w-full sm:w-1/2 lg:w-1/3 rounded-xl m-auto">
      <div class="bg-white rounded shadow px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="card m-auto bg-base-100 shadow-xl">
          <figure><img src="/blog/me-blogging.webp" alt="plant" /></figure>
          <div class="card-body">
            <h1 class="card-title">Portafolio en construcción</h1>
            <p>¿Te gustan las plantas?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-secondary">No 💀</button>
              <button class="btn btn-primary">Sí 🌱</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>
