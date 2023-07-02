import { makeAutoObservable } from 'mobx'
import { v4 as uuidv4 } from 'uuid'

import { tasksData } from '../assets/data/tasksData'
import { ITask } from '../interfaces/task'
import { findTaskById } from '../utils/findTaskById'
import { removeTaskById } from '../utils/removeTaskById'

class Task {
  tasks: ITask[] = tasksData

  constructor() {
    makeAutoObservable(this)
  }

  addTask(title: string, tasks: ITask[]) {
    const uniqId: string = uuidv4()
    const newTask = {
      id: uniqId,
      title,
      text: '',
      completed: false,
      subtask: [],
    }
    tasks.push(newTask)
    console.log('tasks:', this.tasks)
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
