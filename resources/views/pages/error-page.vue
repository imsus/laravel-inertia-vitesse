<script setup lang="ts">
import BlankLayout from '~/views/layouts/blank-layout.vue'

defineProps<{
  message: string
  status: number
  description: string
}>()

defineOptions({
  layout: BlankLayout,
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="text-center max-w-sm p-6 border w-full">
      <div class="text-5xl font-bold">
        {{ status }}
      </div>
      <div class="text-xl mt-2">
        {{ message }}
      </div>
      <p class="mt-3">
        {{ description }}
      </p>
      <InertiaLink class="mt-3 text-blue-600 dark:text-blue-300 inline-flex" href="/">
        Back to Home
      </InertiaLink>
    </div>
  </div>
</template>
