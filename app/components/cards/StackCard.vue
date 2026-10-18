<script setup lang="ts">
import type { StackItem } from '~/types/profile'
defineProps<{ stack: StackItem[] }>()
</script>

<template>
  <BentoCard class="area-stack min-h-44 p-7 sm:p-8">
    <CardLabel text="STACK" />
    <h2 class="mb-5 text-xl font-medium tracking-[-.03em]">Strumenti che uso</h2>
    <ul class="flex flex-wrap gap-2" aria-label="Tecnologie e strumenti"><li v-for="item in stack" :key="item.name"><TechBadge :item="item" /></li></ul>
  </BentoCard>
</template>
