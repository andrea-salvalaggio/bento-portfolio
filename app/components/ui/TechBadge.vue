<script setup lang="ts">
import type { StackItem } from '~/types/profile'

const props = defineProps<{ item: StackItem; decorative?: boolean }>()
const mono = computed(() => {
  const [r, g, b] = [0, 2, 4].map(i => parseInt(props.item.hex.slice(i, i + 2), 16))
  return (r * 299 + g * 587 + b * 114) / 1000 < 60
})
</script>

<template>
  <span class="stack-tile" :class="{ 'stack-tile--mono': mono }" :style="mono ? undefined : { color: `#${item.hex}` }" :title="decorative ? undefined : item.name">
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path :d="item.path" /></svg>
    <span v-if="!decorative" class="sr-only">{{ item.name }}</span>
  </span>
</template>
