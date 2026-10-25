import { siFigma, siGit, siGithub, siNuxt, siSass, siTailwindcss, siTypescript, siVuedotjs } from 'simple-icons'
import type { StackItem } from '~/types/profile'

const fromIcon = (icon: { title: string; path: string; hex: string }): StackItem => ({ name: icon.title, path: icon.path, hex: icon.hex })

export const stack: StackItem[] = [siVuedotjs, siNuxt, siTailwindcss, siTypescript, siSass, siFigma, siGit, siGithub].map(fromIcon)
