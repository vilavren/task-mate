import cn from 'classnames'
import React from 'react'

import { Htag } from '../UI/Htag/Htag'

import styles from './OpenTask.module.css'
import { OpenTaskProps } from './OpenTask.props'

export const OpenTask: React.FC<OpenTaskProps> = ({
  className,
  task,
  ...props
}) => {
  return (
    <div className={cn(className, styles.openTasks)} {...props}>
      <Htag tag="h2">{task.title}</Htag>
      <p className={styles.text}>{task.text}</p>
    </div>
  )
}
