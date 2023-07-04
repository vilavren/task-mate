export interface ITask {
  id: string
  title: string
  text: string
  completed: boolean
  subtasks: ITask[]
  openSubtask: boolean
}
