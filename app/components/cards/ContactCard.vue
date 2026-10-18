<script setup lang="ts">
import type { PortfolioProfile } from '~/types/profile'
defineProps<{ profile: PortfolioProfile }>()
</script>

<template>
  <BentoCard id="contact" class="area-contact min-h-44 p-7 sm:p-8">
    <div class="grid h-full gap-6 md:grid-cols-[1fr_minmax(210px,280px)] md:items-end">
      <div><CardLabel text="CONTATTI" /><h2 class="max-w-md text-[clamp(1.6rem,3vw,2.5rem)] font-medium leading-tight tracking-[-.045em]">Hai un progetto da realizzare?</h2></div>
      <CopyEmailButton :email="profile.email" />
    </div>
  </BentoCard>
</template>
