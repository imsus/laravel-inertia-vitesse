<script setup lang="ts">
import BlankLayout from '~/views/layouts/blank-layout.vue'
import DefaultLayout from '~/views/layouts/default-layout.vue'

defineOptions({
  layout: [BlankLayout, DefaultLayout],
})
</script>

<template>
  <div class="container mx-auto px-6 pt-6 pb-24">
    <h1 class="text-6xl font-bold">
      Home Page
    </h1>

    <div class="mt-12">
      <h2 class="text-2xl font-bold">
        Navigations
      </h2>

      <nav class="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
        <InertiaLink class="aspect-[32/9] md:aspect-[16/9] border inline-flex p-6 items-end hover:(bg-black text-white) dark:hover:(bg-white text-black) transition" href="/about">
          About Page
        </InertiaLink>
      </nav>
    </div>

    <div class="mt-12">
      <h2 class="text-2xl font-bold">
        Error Page
      </h2>

      <nav class="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
        <InertiaLink class="aspect-[32/9] md:aspect-[16/9] border inline-flex p-6 items-end hover:(bg-black text-white) dark:hover:(bg-white text-black) transition" href="/error/401">
          Error 401
        </InertiaLink>
        <InertiaLink class="aspect-[32/9] md:aspect-[16/9] border inline-flex p-6 items-end hover:(bg-black text-white) dark:hover:(bg-white text-black) transition" href="/error/403">
          Error 403
        </InertiaLink>
        <InertiaLink class="aspect-[32/9] md:aspect-[16/9] border inline-flex p-6 items-end hover:(bg-black text-white) dark:hover:(bg-white text-black) transition" href="/error/404">
          Error 404
        </InertiaLink>
        <InertiaLink class="aspect-[32/9] md:aspect-[16/9] border inline-flex p-6 items-end hover:(bg-black text-white) dark:hover:(bg-white text-black) transition" href="/error/419" preserve-scroll>
          Error 419
        </InertiaLink>
        <InertiaLink class="aspect-[32/9] md:aspect-[16/9] border inline-flex p-6 items-end hover:(bg-black text-white) dark:hover:(bg-white text-black) transition" href="/error/429" preserve-scroll>
          Error 429
        </InertiaLink>
        <InertiaLink class="aspect-[32/9] md:aspect-[16/9] border inline-flex p-6 items-end hover:(bg-black text-white) dark:hover:(bg-white text-black) transition" href="/error/500">
          Error 500
        </InertiaLink>
        <InertiaLink class="aspect-[32/9] md:aspect-[16/9] border inline-flex p-6 items-end hover:(bg-black text-white) dark:hover:(bg-white text-black) transition" href="/error/503">
          Error 503
        </InertiaLink>
      </nav>
    </div>
  </div>
</template>
