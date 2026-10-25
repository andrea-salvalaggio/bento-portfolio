<script setup lang="ts">
import type { PortfolioProfile } from '~/types/profile'
defineProps<{ profile: PortfolioProfile }>()
</script>

<template>
  <BentoCard class="area-profile">
    <img v-if="profile.profileImage" :src="profile.profileImage" class="card-image" :alt="`Ritratto di ${profile.name} (segnaposto)`" width="600" height="600">
  </BentoCard>
</template>
