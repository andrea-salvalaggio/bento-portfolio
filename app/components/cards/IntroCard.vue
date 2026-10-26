<script setup lang="ts">
import type { PortfolioProfile } from '~/types/profile'
const props = defineProps<{ profile: PortfolioProfile }>()
const firstName = computed(() => props.profile.name.split(' ')[0])
</script>

<template>
  <BentoCard class="area-intro card-pad flex flex-col justify-center gap-4">
    <div class="flex items-center gap-[clamp(0.75rem,3cqi,1.25rem)]">
      <img src="/images/andrea-thumb.png" :alt="`Portrait of ${profile.name}`" width="180" height="180" class="size-[clamp(3rem,11cqi,5rem)] shrink-0 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-card-hover)] object-cover">
      <h1 class="text-[clamp(1.75rem,7.5cqi,3.25rem)] font-semibold leading-[1.08]">
        Hi, I'm {{ firstName }}
      </h1>
    </div>
    <p class="max-w-[36ch] text-[clamp(1.125rem,4.6cqi,1.75rem)] font-light leading-snug text-[var(--color-text-muted)]">
      <span class="text-[var(--color-text)]">{{ profile.role }}.</span> {{ profile.introduction }}
    </p>
  </BentoCard>
</template>
