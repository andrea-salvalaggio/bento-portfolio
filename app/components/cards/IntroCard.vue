<script setup lang="ts">
import type { PortfolioProfile } from '~/types/profile'
defineProps<{ profile: PortfolioProfile }>()
</script>

<template>
  <BentoCard class="area-intro flex min-h-72 flex-col justify-between p-7 sm:p-9">
    <div>
      <p class="mb-5 text-sm text-[var(--color-text-muted)]">Ciao, sono</p>
      <h1 class="max-w-xl text-[clamp(2rem,4.1vw,4rem)] font-medium leading-[1.03] tracking-[-.055em]">{{ profile.name }}</h1>
    </div>
    <div class="max-w-lg">
      <p class="mb-2 text-lg text-[var(--color-text)]">{{ profile.role }}</p>
      <p class="leading-7 text-[var(--color-text-muted)]">{{ profile.introduction }}</p>
    </div>
  </BentoCard>
</template>
