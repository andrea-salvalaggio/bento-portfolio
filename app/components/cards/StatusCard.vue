<script setup lang="ts">
import { MapPin } from 'lucide-vue-next'
defineProps<{ availability?: string; location?: string }>()
</script>

<template>
  <BentoCard class="area-status card-pad flex flex-col justify-between gap-4">
    <div class="flex items-center gap-3"><span class="status-dot" aria-hidden="true" /><CardLabel text="Disponibilità" class="!mb-0" /></div>
    <h2 class="text-[clamp(1.5rem,8.5cqi,2.6rem)] font-normal leading-snug tracking-[-.02em]">{{ availability || 'Disponibilità da aggiornare' }}</h2>
    <p v-if="location" class="flex items-center gap-2 text-sm text-[var(--color-text-muted)]"><MapPin :size="15" aria-hidden="true" />{{ location }}</p>
  </BentoCard>
</template>
