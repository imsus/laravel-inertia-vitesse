<script setup lang="ts">
const props = defineProps<{
  title?: string
  session: Record<string, any>
}>()

useHead({
  title: computed(() => props.title),
})

let setTimeoutId: any = null
const serverToast = ref(null)

watch(() => props.session.server_toast, (value) => {
  if (value !== null) {
    if (setTimeoutId !== null)
      clearTimeout(setTimeoutId)

    serverToast.value = value

    setTimeoutId = setTimeout(() => {
      serverToast.value = null
    }, 4000)
  }
})
</script>

<template>
  <div>
    <slot />
    <teleport to="#overlay-container">
      <div v-if="serverToast" class="fixed bottom-6 md:top-20 md:bottom-auto left-0 right-0 flex justify-center px-4">
        <div class="bg-black text-white dark:(bg-white text-black) px-6 py-3 inline-flex items-center rounded">
          {{ serverToast.title }}
        </div>
      </div>
    </teleport>
  </div>
</template>
