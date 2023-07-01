import { ReactNode } from 'react'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode
}
