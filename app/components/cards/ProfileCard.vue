<script setup lang="ts">
import type { PortfolioProfile } from '~/types/profile'
defineProps<{ profile: PortfolioProfile }>()
</script>

<template>
  <BentoCard class="area-profile min-h-72">
    <img v-if="profile.profileImage" :src="profile.profileImage" class="h-full min-h-72 w-full object-cover" alt="Ritratto segnaposto da sostituire" width="560" height="700">
  </BentoCard>
</template>
