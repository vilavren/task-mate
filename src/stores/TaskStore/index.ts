import { makeAutoObservable } from 'mobx'

import { ITask } from './types'

class Task {
  tasks: ITask[] = [
    {
      id: 1,
      title: 'Первая',
      completed: false,
    },
    {
      id: 2,
      title: 'Вторая',
      completed: false,
    },
  ]

  constructor() {
    makeAutoObservable(this)
  }

  addTask(task: ITask) {
    this.tasks.push(task)
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter((t) => t.id !== id)
  }

  completedTask(id: number) {
    this.tasks = this.tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    )
  }
}

export default new Task()
