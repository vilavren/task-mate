import { ITask } from '../interfaces/task'

export const findTaskByTitle = (tasks: ITask[], title: string): ITask[] => {
  const filterTasks: ITask[] = []

  tasks.forEach((t) => {
    if (t.title.toLowerCase().includes(title.toLowerCase())) {
      return filterTasks.push(t)
    }

    if (t.subtasks && t.subtasks.length > 0) {
      const nestedResult = findTaskByTitle(t.subtasks, title)
      filterTasks.push(...nestedResult)
    }
  })
  return filterTasks
}
