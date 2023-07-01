import cn from 'classnames'
import React from 'react'

import TaskStore from '../../stores/TaskStore'
import { Task } from '../Task/Task'

import styles from './Tasks.module.css'
import { TasksProps } from './Tasks.props'

export const Tasks: React.FC<TasksProps> = ({ className, ...props }) => {
  return (
    <ul className={cn(className, styles.tasks)} {...props}>
      {TaskStore.tasks.map((t) => (
        <Task key={t.id} task={t} />
      ))}
    </ul>
  )
}
