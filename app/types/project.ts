export interface PortfolioProject {
  id: string
  slug: string
  title: string
  description: string
  image?: string
  imageAlt?: string
  tags: string[]
  projectUrl?: string
  repositoryUrl?: string
  featured?: boolean
}
