import type { PortfolioProject } from '~/types/project'

export const projects: PortfolioProject[] = [
  {
    id: 'discord', slug: 'discord', title: 'Discord',
    description: 'Landing page inspired by Discord.',
    image: '/images/projects/discord.jpg', imageAlt: 'Discord landing page shown on a laptop over a blue background',
    tags: ['UI design', 'Frontend'], featured: true,
  },
  {
    id: 'whatsapp', slug: 'whatsapp', title: 'WhatsApp',
    description: 'Chat interface inspired by WhatsApp Web.',
    image: '/images/projects/whatsapp.jpg', imageAlt: 'Chat interface inspired by WhatsApp Web shown on a tablet over a green background',
    tags: ['UI design', 'Frontend'], featured: true,
  },
  {
    id: 'deliveboo', slug: 'deliveboo', title: 'Deliveboo',
    description: 'Food delivery web app built with Laravel.',
    image: '/images/projects/deliveboo.jpg', imageAlt: 'Deliveboo logo on an orange background with blurred food',
    tags: ['Laravel', 'Full-stack'], projectUrl: 'https://github.com/andrea-salvalaggio/laravel-deliveboo', featured: true,
  },
]
