import { makeAutoObservable } from 'mobx'
import { v4 as uuidv4 } from 'uuid'

import { tasksData } from '../assets/data/tasksData'
import { ITask } from '../interfaces/task'
import { findTaskById } from '../utils/findTaskById'
import { removeTaskById } from '../utils/removeTaskById'

class Task {
  tasks: ITask[] = tasksData
  openTask: ITask = {
    id: '1',
    title: 'Первая',
    text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
    completed: true,
    subtasks: [],
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
    }
  }

  setOpenTask(task: ITask) {
    this.openTask = task
  }
}

export default new Task()
