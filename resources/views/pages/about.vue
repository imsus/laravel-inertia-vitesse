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
      About Page
    </h1>

    <div class="mt-12">
      <h2 class="text-2xl font-bold">
        Navigations
      </h2>

      <nav class="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
        <InertiaLink class="aspect-[32/9] md:aspect-[16/9] border inline-flex p-6 items-end hover:(bg-black text-white) dark:hover:(bg-white text-black) transition" href="/">
          Home Page
        </InertiaLink>
      </nav>
    </div>
  </div>
</template>
