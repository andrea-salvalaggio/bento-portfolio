<script setup lang="ts">
import { aboutText, nowItem, profile } from '~/data/profile'
import { projects } from '~/data/projects'
import { socials } from '~/data/socials'
import { stack } from '~/data/stack'

useSeoMeta({
  title: 'Portfolio | Web & Frontend Designer',
  description: 'Portfolio personale di un Web & Frontend Designer. Contenuti in fase di personalizzazione.',
  ogTitle: 'Portfolio | Web & Frontend Designer',
  ogDescription: 'Interfacce curate e frontend responsive.',
  ogType: 'website',
})
</script>

<template>
  <PortfolioShell>
    <PortfolioGrid>
      <IntroCard :profile="profile" />
      <ProjectCard :project="projects[0]" area-class="area-project-a" />
      <ProjectCard :project="projects[1]" area-class="area-project-b" />
      <SocialCard :socials="socials" />
      <ProfileCard :profile="profile" />
      <AboutCard :text="aboutText" />
      <ProjectCard :project="projects[2]" area-class="area-project-c" />
      <ResourcesCard v-bind="nowItem" />
      <StackCard :stack="stack" />
      <UtilityCard :availability="profile.availability" />
      <ContactCard :profile="profile" />
    </PortfolioGrid>
  </PortfolioShell>
</template>
