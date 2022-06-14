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
    About Page
    <nav>
      <InertiaLink href="/">
        Back to home
      </InertiaLink>
    </nav>
  </div>
</template>
