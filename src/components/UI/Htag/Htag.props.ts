import { ReactNode } from 'react'

export interface HtagProps {
  tag: IHtag
  children: ReactNode
}

export type IHtag = 'h1' | 'h2' | 'h3' | 'h4' | undefined
