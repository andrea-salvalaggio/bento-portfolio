<script setup lang="ts">
import { ExternalLink } from 'lucide-vue-next'
import type { SocialLink } from '~/types/profile'
defineProps<{ socials: SocialLink[] }>()
</script>

<template>
  <BentoCard class="area-social flex min-h-36 flex-col p-4 sm:p-5">
    <CardLabel text="LINK" />
    <nav v-if="socials.length" class="grid flex-1 grid-cols-2 gap-2" aria-label="Profili social"><IconLink v-for="item in socials" :key="item.label" :item="item" /></nav>
    <p v-else class="mt-auto text-sm leading-6 text-[var(--color-text-muted)]">Aggiungi solo i profili pubblici e pertinenti.<ExternalLink class="ml-1 inline" :size="14" aria-hidden="true" /></p>
  </BentoCard>
</template>
