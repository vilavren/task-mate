import cn from 'classnames'
import React from 'react'

import TaskStore from '../../stores/TaskStore'
import { OpenTask } from '../OpenTask/OpenTask'
import { Tasks } from '../Tasks/Tasks'

import styles from './WrapperTasks.module.css'
import { WrapperTasksProps } from './WrapperTasks.props'

export const WrapperTasks: React.FC<WrapperTasksProps> = ({
  className,
  ...props
}) => {
  return (
    <>
      <div className={cn(className, styles.wrapperTasks)} {...props}>
        <Tasks className={styles.tasks} />
        <OpenTask className={styles.openTask} task={TaskStore.tasks[0]} />
      </div>
    </>
  )
}
