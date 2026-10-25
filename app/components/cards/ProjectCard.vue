<script setup lang="ts">
import type { PortfolioProject } from '~/types/project'
defineProps<{ project: PortfolioProject; areaClass: string }>()
</script>

<template>
  <BentoCard :class="areaClass" :interactive="Boolean(project.projectUrl)">
    <component
      :is="project.projectUrl ? 'a' : 'div'"
      class="project-link absolute inset-0 block"
      v-bind="project.projectUrl ? { href: project.projectUrl, target: '_blank', rel: 'noopener noreferrer', 'aria-label': `Apri ${project.title}` } : {}"
    >
      <img v-if="project.image" class="project-image" :src="project.image" :alt="project.imageAlt || ''" width="800" height="600" loading="lazy">
    </component>
    <div class="project-meta">
      <h2 class="project-meta__title">{{ project.title }}</h2>
      <p class="project-meta__text">{{ project.description }}</p>
    </div>
  </BentoCard>
</template>
