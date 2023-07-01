import { ITask } from '../../interfaces/task'
import { IHtag } from '../UI/Htag/Htag.props'

export interface TaskProps extends React.LiHTMLAttributes<HTMLLIElement> {
  task: ITask
  htag: IHtag
  subHtag: IHtag
}
