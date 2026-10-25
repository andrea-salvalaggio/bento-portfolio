import type { PortfolioProject } from '~/types/project'

export const projects: PortfolioProject[] = [
  {
    id: 'placeholder-a', slug: 'progetto-a', title: 'Progetto A',
    description: 'Anteprima progetto — contenuto da sostituire.',
    image: '/images/projects/project-a.svg', imageAlt: 'Mockup astratto del Progetto A',
    tags: ['UI design', 'Frontend'], featured: true,
  },
  {
    id: 'placeholder-b', slug: 'progetto-b', title: 'Progetto B',
    description: 'Anteprima progetto — contenuto da sostituire.',
    image: '/images/projects/project-b.svg', imageAlt: 'Mockup astratto del Progetto B',
    tags: ['Web design'], featured: true,
  },
  {
    id: 'placeholder-c', slug: 'progetto-c', title: 'Progetto C',
    description: 'Anteprima progetto — contenuto da sostituire.',
    image: '/images/projects/project-c.svg', imageAlt: 'Mockup astratto del Progetto C',
    tags: ['Design system', 'Vue'], featured: true,
  },
]
