import { ITask } from '../interfaces/task'

export const completedSubtask = (
  task: ITask | undefined,
  completed: boolean
) => {
  if (task?.subtasks) {
    task.subtasks.forEach((t) => {
      t.completed = completed
      completedSubtask(t, completed)
    })
  }
}
