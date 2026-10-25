export interface PortfolioProfile {
  name: string
  role: string
  introduction: string
  email: string
  location?: string
  availability?: string
  profileImage?: string
}

export interface SocialLink {
  label: string
  url: string
  icon: 'github' | 'linkedin' | 'instagram' | 'mail'
}

export interface StackItem {
  name: string
  path: string
  hex: string
}
