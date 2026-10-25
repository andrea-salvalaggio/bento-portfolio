<script setup lang="ts">
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import type { SocialLink } from '~/types/profile'

const props = defineProps<{ item: SocialLink }>()
const icons = { github: faGithub, linkedin: faLinkedinIn, instagram: faInstagram, mail: faEnvelope }
const glyph = computed(() => icons[props.item.icon])
const external = computed(() => !props.item.url.startsWith('mailto:'))
</script>

<template>
  <a :href="item.url" class="social-tile" :target="external ? '_blank' : undefined" :rel="external ? 'noopener noreferrer' : undefined">
    <svg :viewBox="`0 0 ${glyph.icon[0]} ${glyph.icon[1]}`" fill="currentColor" aria-hidden="true"><path :d="String(glyph.icon[4])" /></svg>
    {{ item.label }}
  </a>
</template>
