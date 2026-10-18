<script setup lang="ts">
import { ArrowDownRight } from 'lucide-vue-next'
defineProps<{ text: string }>()
</script>

<template>
  <BentoCard id="about" class="area-about flex min-h-72 flex-col justify-between p-7 sm:p-8">
    <div><CardLabel text="ABOUT" /><p class="max-w-md text-[clamp(1.35rem,2.3vw,2rem)] font-medium leading-snug tracking-[-.035em]">{{ text }}</p></div>
    <a href="#contact" class="card-arrow self-end" aria-label="Vai ai contatti"><ArrowDownRight :size="20" aria-hidden="true" /></a>
  </BentoCard>
</template>
