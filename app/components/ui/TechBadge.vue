<script setup lang="ts">
import type { StackItem } from '~/types/profile'
defineProps<{ item: StackItem }>()
</script>

<template>
  <span class="inline-flex min-h-11 items-center rounded-xl border border-[var(--color-border)] bg-[var(--color-shell)] px-3 text-sm text-[var(--color-text)]" :title="item.detail">{{ item.name }}</span>
</template>
