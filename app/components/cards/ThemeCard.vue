<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next'
const { theme, toggle } = useTheme()
</script>

<template>
  <BentoCard class="area-theme grid place-items-center">
    <button type="button" class="theme-switch" role="switch" :aria-checked="theme === 'dark'" aria-label="Dark theme" @click="toggle">
      <span class="theme-switch__thumb"><Moon v-if="theme === 'dark'" :size="16" aria-hidden="true" /><Sun v-else :size="16" aria-hidden="true" /></span>
    </button>
  </BentoCard>
</template>
