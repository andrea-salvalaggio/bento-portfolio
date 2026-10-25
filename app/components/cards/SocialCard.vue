<script setup lang="ts">
import type { SocialLink } from '~/types/profile'
defineProps<{ socials: SocialLink[] }>()
</script>

<template>
  <nav class="area-social social-grid" aria-label="Profili social">
    <IconLink v-for="item in socials" :key="item.label" :item="item" />
  </nav>
</template>
