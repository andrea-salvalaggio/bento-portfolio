<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import type { PortfolioProject } from '~/types/project'
defineProps<{ project: PortfolioProject; areaClass: string }>()
</script>

<template>
  <BentoCard :class="[areaClass, 'relative min-h-56']" :interactive="Boolean(project.projectUrl)">
    <a v-if="project.projectUrl" class="project-link absolute inset-0" :href="project.projectUrl" target="_blank" rel="noopener noreferrer" :aria-label="`Apri ${project.title}`">
      <img v-if="project.image" class="project-image" :src="project.image" :alt="project.imageAlt || ''" width="800" height="600">
      <span class="sr-only">Apri {{ project.title }}</span>
    </a>
    <img v-else-if="project.image" class="project-image absolute inset-0" :src="project.image" :alt="project.imageAlt || ''" width="800" height="600">
    <div class="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5 pt-16">
      <div class="flex items-end justify-between gap-3"><div><h2 class="text-lg font-medium">{{ project.title }}</h2><p class="mt-1 text-sm text-white/65">{{ project.description }}</p></div><ArrowUpRight v-if="project.projectUrl" :size="20" aria-hidden="true" /></div>
    </div>
  </BentoCard>
</template>
