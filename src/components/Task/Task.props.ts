import { ITask } from '../../interfaces/task'

export interface TaskProps extends React.InputHTMLAttributes<HTMLInputElement> {
  task: ITask
}
