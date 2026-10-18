<script setup lang="ts">
import { Dribbble, Github, Instagram, Linkedin } from 'lucide-vue-next'
import type { SocialLink } from '~/types/profile'

const props = defineProps<{ item: SocialLink }>()
const icons = { github: Github, linkedin: Linkedin, instagram: Instagram, dribbble: Dribbble }
</script>

<template>
  <a :href="item.url" target="_blank" rel="noopener noreferrer" class="grid min-h-14 place-items-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-shell)] text-[var(--color-text)] transition hover:border-[var(--color-border-strong)] hover:bg-[var(--color-card-hover)]" :aria-label="item.label">
    <component :is="icons[props.item.icon]" :size="22" aria-hidden="true" />
  </a>
</template>
