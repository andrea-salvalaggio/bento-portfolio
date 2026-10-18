<script setup lang="ts">
defineProps<{ text: string }>()
</script>

<template><p class="card-label">{{ text }}</p></template>
