<script setup lang="ts">
import type { PortfolioProject } from '~/types/project'
defineProps<{ project: PortfolioProject; areaClass: string }>()
const { onPointerMove, onPointerLeave } = useTilt()
</script>

<template>
  <BentoCard class="tilt-card" :class="areaClass" :interactive="Boolean(project.projectUrl)" @pointermove="onPointerMove" @pointerleave="onPointerLeave">
    <component
      :is="project.projectUrl ? 'a' : 'div'"
      class="project-link absolute inset-0 block"
      v-bind="project.projectUrl ? { href: project.projectUrl, target: '_blank', rel: 'noopener noreferrer', 'aria-label': `Open ${project.title}` } : {}"
    >
      <img v-if="project.image" class="project-image" :src="project.image" :alt="project.imageAlt || ''" width="800" height="600" loading="lazy">
    </component>
  </BentoCard>
</template>
