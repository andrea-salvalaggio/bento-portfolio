<script setup lang="ts">
import type { StackItem } from '~/types/profile'
defineProps<{ stack: StackItem[] }>()
</script>

<template>
  <BentoCard class="area-stack card-pad flex flex-col justify-between gap-4">
    <h2 class="text-[clamp(1.5rem,8cqi,2.5rem)] font-normal leading-tight tracking-[-.03em]">Stack che uso</h2>
    <div class="stack-marquee" role="group" aria-label="Tecnologie e strumenti">
      <ul class="stack-track">
        <li v-for="item in stack" :key="item.name"><TechBadge :item="item" /></li>
        <li v-for="item in stack" :key="`${item.name}-copy`" aria-hidden="true"><TechBadge :item="item" decorative /></li>
      </ul>
    </div>
  </BentoCard>
</template>
