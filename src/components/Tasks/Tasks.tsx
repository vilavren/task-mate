import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import React from 'react'

import TaskStore from '../../stores/TaskStore'
import { Task } from '../Task/Task'
import { Input } from '../UI/Input/Input'

import styles from './Tasks.module.css'
import { TasksProps } from './Tasks.props'

export const Tasks: React.FC<TasksProps> = observer(
  ({ className, ...props }) => {
    return (
      <ul className={cn(className, styles.tasks)} {...props}>
        {TaskStore.tasks.map((t) => (
          <Task htag="h3" subHtag="h4" key={t.id} task={t} />
        ))}
        <Input className={styles.input} placeholder="Новая задача..." />
      </ul>
    )
  }
)
