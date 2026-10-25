<script setup lang="ts">
import type { PortfolioProfile } from '~/types/profile'
defineProps<{ profile: PortfolioProfile }>()
</script>

<template>
  <BentoCard id="contact" class="area-contact card-pad flex flex-col justify-center gap-4">
    <h2 class="text-[clamp(1.15rem,8cqi,1.75rem)] font-normal leading-snug tracking-[-.02em]">Hai un progetto in mente?</h2>
    <CopyEmailButton :email="profile.email" />
  </BentoCard>
</template>
