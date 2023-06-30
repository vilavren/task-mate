export interface ITask {
  id: number
  title: string
  completed: boolean
  subtasks?: ITask[]
}
