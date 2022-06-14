<script setup lang="ts">
import { isDark, toggleDark } from '~/scripts/composables/dark'
</script>

<template>
  <button type="button" @click="toggleDark()">
    Toggle {{ isDark ? 'Light' : 'Dark' }}
  </button>
</template>
