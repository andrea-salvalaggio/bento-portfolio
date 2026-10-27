<script setup lang="ts">
import { Check, Copy, X } from 'lucide-vue-next'

const props = defineProps<{ email: string }>()
const { status, copy } = useCopyToClipboard()
</script>

<template>
  <button type="button" class="sweep-button flex min-h-11 w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-hover)] px-3 text-sm text-[var(--color-text)] transition hover:border-[var(--color-border-strong)]" @click="copy(props.email)">
    <span aria-live="polite">{{ status === 'success' ? 'Email copied' : status === 'error' ? 'Copy failed' : 'Copy email' }}</span>
    <span :key="status" class="icon-pop" aria-hidden="true">
      <Check v-if="status === 'success'" :size="16" />
      <X v-else-if="status === 'error'" :size="16" />
      <Copy v-else :size="16" />
    </span>
  </button>
</template>
