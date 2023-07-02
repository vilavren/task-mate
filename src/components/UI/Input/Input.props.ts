import { ReactNode } from 'react'

import { ITask } from '../../../interfaces/task'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  tasks?: ITask[]
  children?: ReactNode
}
