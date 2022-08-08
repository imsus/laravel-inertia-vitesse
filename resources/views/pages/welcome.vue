<script setup lang="ts">
import type { Ref } from 'vue'
import BlankLayout from '~/views/layouts/blank-layout.vue'
import DefaultLayout from '~/views/layouts/default-layout.vue'

defineOptions({
  layout: [BlankLayout, DefaultLayout],
})

const serverToast: Ref<Record<string, any> | null> = ref(null)

const form = useForm({})

const formGet = (url: string) => {
  form.get(url, {
    preserveScroll: true,
    preserveState: true,
    onSuccess: (page): void => {
      serverToast.value = page.props.session?.server_toast
    },
  })
}
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
        <InertiaLink class="aspect-[32/9] md:aspect-[16/9] border inline-flex p-6 items-end hover:(bg-black text-white) dark:hover:(bg-white text-black) transition" href="/about">
          Form Page
        </InertiaLink>
        <InertiaLink class="aspect-[32/9] md:aspect-[16/9] border inline-flex p-6 items-end hover:(bg-black text-white) dark:hover:(bg-white text-black) transition" href="/about">
          Search Page
        </InertiaLink>
        <InertiaLink class="aspect-[32/9] md:aspect-[16/9] border inline-flex p-6 items-end hover:(bg-black text-white) dark:hover:(bg-white text-black) transition" href="/about">
          Datatables Page
        </InertiaLink>
        <InertiaLink class="aspect-[32/9] md:aspect-[16/9] border inline-flex p-6 items-end hover:(bg-black text-white) dark:hover:(bg-white text-black) transition" href="/about">
          Exporting / Importing Page
        </InertiaLink>
        <InertiaLink class="aspect-[32/9] md:aspect-[16/9] border inline-flex p-6 items-end hover:(bg-black text-white) dark:hover:(bg-white text-black) transition" href="/about">
          Multiple Pagination Page
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
        <button as="button" class="aspect-[32/9] md:aspect-[16/9] border inline-flex p-6 items-end hover:(bg-black text-white) dark:hover:(bg-white text-black) transition" @click="formGet('/error/419')">
          Error 419
        </button>
        <button as="button" class="aspect-[32/9] md:aspect-[16/9] border inline-flex p-6 items-end hover:(bg-black text-white) dark:hover:(bg-white text-black) transition" @click="formGet('/error/429')">
          Error 429
        </button>
        <InertiaLink class="aspect-[32/9] md:aspect-[16/9] border inline-flex p-6 items-end hover:(bg-black text-white) dark:hover:(bg-white text-black) transition" href="/error/500">
          Error 500
        </InertiaLink>
        <InertiaLink class="aspect-[32/9] md:aspect-[16/9] border inline-flex p-6 items-end hover:(bg-black text-white) dark:hover:(bg-white text-black) transition" href="/error/503">
          Error 503
        </InertiaLink>
      </nav>
    </div>

    <teleport to="#overlay-container">
      <div v-if="form.recentlySuccessful" class="fixed bottom-6 md:top-20 md:bottom-auto left-0 right-0 flex justify-center px-4">
        <div class="bg-black text-white dark:(bg-white text-black) px-6 py-3 inline-flex items-center rounded">
          {{ serverToast?.title }}
        </div>
      </div>
    </teleport>
  </div>
</template>
