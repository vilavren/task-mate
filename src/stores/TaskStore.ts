import { makeAutoObservable } from 'mobx'

import { tasksData } from '../assets/data/tasksData'
import { ITask } from '../interfaces/task'
import { findTaskById } from '../utils/findTaskById'
import { removeTaskById } from '../utils/removeTaskById'

class Task {
  tasks: ITask[] = tasksData

  constructor() {
    makeAutoObservable(this)
  }

  addTask(task: ITask) {
    this.tasks.push(task)
  }

  removeTask(id: string) {
    this.tasks = removeTaskById(this.tasks, id)
  }

  completedTask(id: string) {
    const task = findTaskById(this.tasks, id)
    if (task) {
      task.completed = !task.completed
    }
  }
}

export default new Task()
