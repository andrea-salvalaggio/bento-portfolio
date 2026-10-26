<script setup lang="ts">
import { MapPin } from 'lucide-vue-next'
const props = defineProps<{ availability?: string; location?: string; locationUrl?: string }>()
const lines = computed(() => {
  const words = (props.availability || 'Availability to be updated').split(' ')
  const half = words.join(' ').length / 2
  let split = 1
  let length = 0
  words.forEach((word, i) => {
    length += word.length + 1
    if (length - word.length / 2 <= half) split = i + 1
  })
  return [words.slice(0, split).join(' '), words.slice(split).join(' ')]
})
</script>

<template>
  <BentoCard class="area-status status-card" :interactive="Boolean(locationUrl)">
    <img class="card-image" src="/images/map-padova.svg" alt="" width="800" height="600">
    <component
      :is="locationUrl ? 'a' : 'div'"
      class="project-link card-pad absolute inset-0 flex flex-col justify-between gap-4 text-white"
      v-bind="locationUrl ? { href: locationUrl, target: '_blank', rel: 'noopener noreferrer', 'aria-label': `Open ${location} in Apple Maps` } : {}"
    >
      <div class="flex items-center gap-3"><span class="status-dot" aria-hidden="true" /><CardLabel text="Availability" class="!mb-0 !text-white/70" /></div>
      <h2 class="text-[clamp(1rem,6cqi,2.6rem)] font-normal leading-snug"><span v-for="line in lines" :key="line" class="block whitespace-nowrap">{{ line }}</span></h2>
      <p v-if="location" class="flex items-center gap-2 text-sm text-white/80"><MapPin :size="15" aria-hidden="true" />{{ location }}</p>
    </component>
  </BentoCard>
</template>
