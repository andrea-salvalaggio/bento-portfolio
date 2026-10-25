<script setup lang="ts">
import { aboutText, mainPortfolio, profile } from '~/data/profile'
import { projects } from '~/data/projects'
import { socials } from '~/data/socials'
import { stack } from '~/data/stack'

useSeoMeta({
  title: 'Andrea Salvalaggio | Web & Frontend Developer',
  description: 'Portfolio di Andrea Salvalaggio, Web & Frontend Developer: interfacce curate e frontend responsive.',
  ogTitle: 'Andrea Salvalaggio | Web & Frontend Developer',
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
      <PortfolioCard v-bind="mainPortfolio" />
      <StatusCard :availability="profile.availability" :location="profile.location" />
      <StackCard :stack="stack" />
      <ThemeCard />
      <ContactCard :profile="profile" />
    </PortfolioGrid>
  </PortfolioShell>
</template>
