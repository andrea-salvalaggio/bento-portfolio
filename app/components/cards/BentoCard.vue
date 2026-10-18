<script setup lang="ts">
withDefaults(defineProps<{ interactive?: boolean }>(), { interactive: false })
</script>

<template>
  <article class="bento-card" :class="{ 'bento-card--interactive': interactive }">
    <slot />
  </article>
</template>
