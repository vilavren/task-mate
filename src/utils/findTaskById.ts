import { ITask } from '../interfaces/task'

export const findTaskById = (tasks: ITask[], id: string): ITask | undefined => {
  for (const t of tasks) {
    if (t.id === id) {
      return t
    }
    if (t.subtasks) {
      const nestedResult = findTaskById(t.subtasks, id)
      if (nestedResult) {
        return nestedResult
      }
    }
  }
  return undefined
}
