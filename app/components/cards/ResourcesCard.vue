<script setup lang="ts">
defineProps<{ label: string; title: string; description: string }>()
</script>

<template>
  <BentoCard class="area-now flex min-h-56 flex-col justify-between p-7 sm:p-8">
    <div><CardLabel :text="label" /><h2 class="text-2xl font-medium tracking-[-.04em]">{{ title }}</h2></div>
    <p class="text-sm leading-6 text-[var(--color-text-muted)]">{{ description }}</p>
  </BentoCard>
</template>
