import { ReactNode } from 'react'

import { ITask } from '../../../interfaces/task'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  tasks?: ITask[]
  setOpenSubtask?: React.Dispatch<React.SetStateAction<boolean>>
  children?: ReactNode
}
