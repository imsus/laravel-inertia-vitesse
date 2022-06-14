<script setup lang="ts">

</script>

<template>
  <div>
    <div>
      Default Layout
      <DarkModeToggler />
    </div>
    <Suspense>
      <slot />
    </Suspense>
  </div>
</template>
