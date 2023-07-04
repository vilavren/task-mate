import { ReactNode } from 'react'

import { ITask } from '../../../interfaces/task'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  task?: ITask | undefined
  tasks?: ITask[]
  children?: ReactNode
}
