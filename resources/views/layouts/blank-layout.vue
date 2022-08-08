<script setup lang="ts">
const props = defineProps<{
  title?: string
  session: Record<string, any>
}>()

useHead({
  title: computed(() => props.title),
})
</script>

<template>
  <div>
    <slot />
  </div>
</template>
