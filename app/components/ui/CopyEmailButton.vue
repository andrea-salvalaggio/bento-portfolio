<script setup lang="ts">
import { Check, Clipboard, Mail, X } from 'lucide-vue-next'

const props = defineProps<{ email: string }>()
const { status, copy } = useCopyToClipboard()
const message = computed(() => status.value === 'success' ? 'Email copiata' : status.value === 'error' ? 'Copia non disponibile: usa il link email' : '')
</script>

<template>
  <div>
    <button type="button" class="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-text)] px-4 font-medium text-[var(--color-page)] transition hover:bg-white" @click="copy(props.email)">
      <Check v-if="status === 'success'" :size="18" aria-hidden="true" />
      <X v-else-if="status === 'error'" :size="18" aria-hidden="true" />
      <Clipboard v-else :size="18" aria-hidden="true" />
      {{ status === 'success' ? 'Email copiata' : 'Copia email' }}
    </button>
    <p class="feedback mt-2" aria-live="polite">{{ message }}</p>
    <a :href="`mailto:${props.email}`" class="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] underline decoration-[var(--color-border-strong)] underline-offset-4 hover:text-[var(--color-text)]"><Mail :size="15" aria-hidden="true" />Apri il client email</a>
  </div>
</template>
