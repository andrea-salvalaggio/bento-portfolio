<script setup lang="ts">
import { Code2 } from 'lucide-vue-next'
defineProps<{ availability?: string }>()
</script>

<template>
  <BentoCard class="area-utility flex min-h-44 flex-col justify-between p-6">
    <Code2 :size="22" class="text-[var(--color-accent)]" aria-hidden="true" />
    <div><CardLabel text="STATUS" /><p class="text-sm leading-6 text-[var(--color-text-muted)]">{{ availability || 'Disponibilità da aggiornare' }}</p></div>
  </BentoCard>
</template>
