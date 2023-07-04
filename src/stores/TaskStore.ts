import { makeAutoObservable } from 'mobx'
import { v4 as uuidv4 } from 'uuid'

import { ITask } from '../interfaces/task'
import { completedSubtask } from '../utils/completedSubtask'
import { findTaskById } from '../utils/findTaskById'
import { getTaskFromLS } from '../utils/getTaskFromLS'
import { removeTaskById } from '../utils/removeTaskById'
import { setTaskFromLS } from '../utils/setTaskFromLS'

class Task {
  tasks: ITask[] = getTaskFromLS()
  openTask: ITask = {
    id: '',
    title: 'Task Mate',
    text: ' ',
    completed: true,
    subtasks: [],
    openSubtask: false,
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
      openSubtask: false,
    }
    tasks.push(newTask)
    setTaskFromLS()
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
    setTaskFromLS()
  }

  setOpenTask(task: ITask) {
    this.openTask = task
  }
}

export default new Task()
