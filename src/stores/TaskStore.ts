import { makeAutoObservable } from 'mobx'
import { v4 as uuidv4 } from 'uuid'

import { tasksData } from '../assets/data/tasksData'
import { ITask } from '../interfaces/task'
import { findTaskById } from '../utils/findTaskById'
import { removeTaskById } from '../utils/removeTaskById'

class Task {
  tasks: ITask[] = tasksData
  openTask: ITask = this.tasks[0]

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
      subtasks: [],
    }
    tasks.push(newTask)
    console.log('tasks:', this.tasks)
  }

  removeTask(id: string) {
    this.tasks = removeTaskById(this.tasks, id)
  }

  completedTask(id: string) {
    const task = findTaskById(this.tasks, id)
    const completedSubtask = (task: ITask | undefined, completed: boolean) => {
      if (task?.subtasks) {
        task.subtasks.forEach((t) => {
          t.completed = completed
          completedSubtask(t, completed)
        })
      }
    }

    if (task) {
      task.completed = !task.completed
      task.completed === true
        ? completedSubtask(task, true)
        : completedSubtask(task, false)
    }
  }

  setOpenTask(task: ITask) {
    this.openTask = task
  }
}

export default new Task()
