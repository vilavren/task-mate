import { makeAutoObservable } from 'mobx'

import { tasksData } from '../assets/data/tasksData'
import { ITask } from '../interfaces/task'

class Task {
  tasks: ITask[] = tasksData

  constructor() {
    makeAutoObservable(this)
  }

  addTask(task: ITask) {
    this.tasks.push(task)
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((t) => t.id !== id)
  }

  completedTask(id: string) {
    this.tasks = this.tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    )
  }
}

export default new Task()
