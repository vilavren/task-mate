import { makeAutoObservable } from 'mobx'

import { tasksData } from '../assets/data/tasksData'
import { ITask } from '../interfaces/task'
import { findTaskById } from '../utils/findTaskById'

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
    const task = findTaskById(this.tasks, id)
    if (task) {
      task.completed = !task.completed
    }
  }
}

export default new Task()
