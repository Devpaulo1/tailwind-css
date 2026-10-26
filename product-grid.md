<main class="min-h-screen bg-slate-950 p-6 text-white">
  <section class="mx-auto max-w-6xl ">
    <header class="mb-8">
      <span class="text-sm font-bold uppercase tracking-widest text-cyan-400">Tailwind Play</span>
      <h1 class="mt-2 text-3xl font-black sm:text-4xl lg:text-5xl">Product Grid Responsivo</h1>
      <p class="mt-3 max-w-2xl text-slate-400">
        Pratique breakpoints, Grid, hover, focus, active e disabled.
      </p>
    </header>

    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <article class="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 
      hover:-translate-y-1 hover:border-cyan-400/10">
        <div class="grid aspect-[16/10] place-items-center bg-cyan-500 text-6xl font-black text-slate-950 transition duration-500 group-hover:scale-105">01</div>
        <div class="p-6">
          <span class="text-sm font-bold text-cyan-400">Starter</span>
          <h2 class="mt-1 text-2xl font-black">UI Foundations</h2>
          <p class="mt-3 text-salte-400">Layout, spacing, tipografia e cores.</p>
          <button class="mt-6 w-full rounded-xl bg-cyan-400 px-4 py-3 font-bold text-slate-950">Escolher</button>
        </div>
      </article>

      <article class="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 
      hover:-translate-y-1 hover:border-cyan-400/10">
        <div class="grid aspect-[16/10] place-items-center bg-purple-900 text-6xl font-black text-white transition duration-500 group-hover:scale-105">02</div>
        <div class="p-6">
          <span class="text-sm font-bold text-purple-900">Intermediate</span>
          <h2 class="mt-1 text-2xl font-black">Responsive UI</h2>
          <p class="mt-3 text-salte-400">Breakpoints e variantes condicionais.</p>
          <button class="mt-6 w-full rounded-xl bg-purple-900 px-4 py-3 font-bold text-white">Escolher</button>
        </div>
      </article>

      <article class="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 
      hover:-translate-y-1 hover:border-cyan-400/10">
        <div class="grid aspect-[16/10] place-items-center bg-gray-800 text-6xl font-black text-gray-400 transition duration-500 group-hover:scale-105">03</div>
        <div class="p-6">
          <span class="text-sm font-bold text-gray-400">Locked</span>
          <h2 class="mt-1 text-2xl font-black">Advanced UI</h2>
          <p class="mt-3 text-salte-400">Este plano ainda está indisponível.</p>
          <button class="mt-6 w-full rounded-xl bg-gray-800 px-4 py-3 font-bold text-gray-400" disabled>Indisponível</button>
        </div>
      </article>

      
    </div>
  </section>
</main>
