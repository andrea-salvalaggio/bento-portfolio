<script setup lang="ts">
import type { PortfolioProfile } from '~/types/profile'
const props = defineProps<{ profile: PortfolioProfile }>()
const firstName = computed(() => props.profile.name.split(' ')[0])
</script>

<template>
  <BentoCard class="area-intro card-pad flex flex-col justify-center gap-4">
    <h1 class="text-[clamp(1.75rem,7.5cqi,3.25rem)] font-normal leading-[1.08] tracking-[-.02em]">
      Ciao, sono {{ firstName }}<span class="text-[var(--color-text-subtle)]"> —</span>
    </h1>
    <p class="max-w-[34ch] text-[clamp(1rem,3.8cqi,1.5rem)] font-light leading-snug tracking-[-.01em] text-[var(--color-text-muted)]">
      <span class="text-[var(--color-text)]">{{ profile.role }}.</span> {{ profile.introduction }}
    </p>
  </BentoCard>
</template>
