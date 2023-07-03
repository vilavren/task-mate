import { ReactNode } from 'react'

export interface HtagProps extends React.HTMLAttributes<HTMLHeadingElement> {
  tag: IHtag
  onClick?: React.MouseEventHandler<HTMLHeadingElement> | undefined
  children: ReactNode
}

export type IHtag = 'h1' | 'h2' | 'h3' | 'h4' | undefined
