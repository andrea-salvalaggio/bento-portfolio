<script setup lang="ts">
defineProps<{ text: string }>()
</script>

<template>
  <BentoCard id="about" class="area-about card-pad flex flex-col justify-center">
    <CardLabel text="About me" />
    <p class="text-[clamp(1.35rem,6.4cqi,2.5rem)] font-normal leading-[1.2]">{{ text }}</p>
  </BentoCard>
</template>
