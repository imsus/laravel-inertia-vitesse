<script setup lang="ts">
import DefaultLayout from '~/views/layouts/default-layout.vue'

defineProps<{
  versions: {
    php: string
    laravel: string
  }
}>()

defineOptions({
  layout: DefaultLayout,
})
</script>

<template>
  <div>
    Home Page
    <nav>
      <InertiaLink href="/about">
        Go to About Page
      </InertiaLink>
    </nav>
  </div>
</template>
