import { ITask } from '../interfaces/task'

export const getTaskFromLS = () => {
  const data = localStorage.getItem('tasks')
  const tasks: ITask[] = data ? JSON.parse(data) : []

  return tasks
}
