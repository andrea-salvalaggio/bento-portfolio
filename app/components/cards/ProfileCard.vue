<script setup lang="ts">
import type { PortfolioProfile } from '~/types/profile'
defineProps<{ profile: PortfolioProfile }>()
const { onPointerMove, onPointerLeave } = useTilt()
</script>

<template>
  <BentoCard class="area-profile tilt-card" @pointermove="onPointerMove" @pointerleave="onPointerLeave">
    <img v-if="profile.profileImage" :src="profile.profileImage" class="card-image" :alt="`Portrait of ${profile.name}`" width="600" height="600">
  </BentoCard>
</template>
