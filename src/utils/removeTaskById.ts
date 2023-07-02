import { ITask } from '../interfaces/task'

export const removeTaskById = (tasks: ITask[], id: string): ITask[] => {
  return tasks.filter((t) => {
    if (t.id === id) {
      return false
    }

    if (t.subtasks && t.subtasks.length > 0) {
      t.subtasks = removeTaskById(t.subtasks, id)
    }

    return true
  })
}
