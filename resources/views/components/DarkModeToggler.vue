<script setup lang="ts">
import { isDark, toggleDark } from '~/scripts/composables/dark'
</script>

<template>
  <button type="button" @click="toggleDark()">
    Toggle {{ isDark ? 'Light' : 'Dark' }}
    <span class="i-ph-sun-fill dark:i-ph-moon-fill h-6 w-6 ml-3" />
  </button>
</template>
