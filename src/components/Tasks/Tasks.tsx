import React from 'react'

import TaskStore from '../../stores/TaskStore'
import { Task } from '../Task/Task'

import { TasksProps } from './Tasks.props'

export const Tasks: React.FC<TasksProps> = () => {
  return (
    <ul>
      {TaskStore.tasks.map((t) => (
        <Task key={t.id} task={t} />
      ))}
    </ul>
  )
}
