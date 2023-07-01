import { ITask } from '../../interfaces/task'

export interface TaskProps extends React.LiHTMLAttributes<HTMLLIElement> {
  task: ITask
}
