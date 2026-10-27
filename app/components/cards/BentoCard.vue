<script setup lang="ts">
withDefaults(defineProps<{ interactive?: boolean }>(), { interactive: false })
const { onPointerMove } = useGlow()
</script>

<template>
  <article class="bento-card" :class="{ 'bento-card--interactive': interactive }" @pointermove="onPointerMove">
    <slot />
  </article>
</template>
