<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
defineProps<{ label: string; title: string; url: string }>()
</script>

<template>
  <BentoCard class="area-portfolio" interactive>
    <a :href="url" target="_blank" rel="noopener noreferrer" class="project-link card-pad absolute inset-0 flex flex-col justify-between gap-4">
      <span class="block">
        <CardLabel :text="label" />
        <span class="block text-[clamp(1.2rem,9cqi,1.9rem)] leading-snug">{{ title }}</span>
        <span class="sr-only"> (opens in a new tab)</span>
      </span>
      <span class="card-arrow self-end" aria-hidden="true"><ArrowUpRight :size="18" /></span>
    </a>
  </BentoCard>
</template>
