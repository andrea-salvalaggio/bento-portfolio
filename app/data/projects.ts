import type { PortfolioProject } from '~/types/project'

export const projects: PortfolioProject[] = [
  {
    id: 'placeholder-a', slug: 'project-a', title: 'Project A',
    description: 'Project preview — content to be replaced.',
    image: '/images/projects/project-a.svg', imageAlt: 'Abstract mockup of Project A',
    tags: ['UI design', 'Frontend'], featured: true,
  },
  {
    id: 'placeholder-b', slug: 'project-b', title: 'Project B',
    description: 'Project preview — content to be replaced.',
    image: '/images/projects/project-b.svg', imageAlt: 'Abstract mockup of Project B',
    tags: ['Web design'], featured: true,
  },
  {
    id: 'placeholder-c', slug: 'project-c', title: 'Project C',
    description: 'Project preview — content to be replaced.',
    image: '/images/projects/project-c.svg', imageAlt: 'Abstract mockup of Project C',
    tags: ['Design system', 'Vue'], featured: true,
  },
]
