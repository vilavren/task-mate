import { ITask } from '../../interfaces/task'

export interface OpenTaskProps extends React.HTMLAttributes<HTMLDivElement> {
  task: ITask
}
