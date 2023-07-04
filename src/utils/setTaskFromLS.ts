import TaskStore from '../stores/TaskStore'

export const setTaskFromLS = () => {
  const json = JSON.stringify(TaskStore.tasks)
  localStorage.setItem('tasks', json)
}
