<script setup lang="ts">
import { Check, Copy, X } from 'lucide-vue-next'

const props = defineProps<{ email: string }>()
const { status, copy } = useCopyToClipboard()
</script>

<template>
  <button type="button" class="flex min-h-11 w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-hover)] px-3 text-sm text-[var(--color-text)] transition hover:border-[var(--color-border-strong)]" @click="copy(props.email)">
    <span aria-live="polite">{{ status === 'success' ? 'Email copiata' : status === 'error' ? 'Copia non riuscita' : 'Copia email' }}</span>
    <Check v-if="status === 'success'" :size="16" aria-hidden="true" />
    <X v-else-if="status === 'error'" :size="16" aria-hidden="true" />
    <Copy v-else :size="16" aria-hidden="true" />
  </button>
</template>
