import { makeAutoObservable } from 'mobx'
import { v4 as uuidv4 } from 'uuid'

import { ITask } from '../interfaces/task'
import { completedSubtask } from '../utils/completedSubtask'
import { findTaskById } from '../utils/findTaskById'
import { removeTaskById } from '../utils/removeTaskById'

class Task {
  tasks: ITask[] = []
  openTask: ITask = {
    id: '',
    title: 'Task Mate',
    text: 'Чтобы создать новую задачу, нажмите кнопку "+"',
    completed: true,
  }

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
