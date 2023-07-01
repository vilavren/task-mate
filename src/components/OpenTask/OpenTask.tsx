import cn from 'classnames'
import React from 'react'

import styles from './OpenTask.module.css'
import { OpenTaskProps } from './OpenTask.props'

export const OpenTask: React.FC<OpenTaskProps> = ({
  className,
  task,
  ...props
}) => {
  return (
    <>
      <div className={cn(className, styles.tasks)} {...props}>
        <h2 className={styles.title}>{task.title}</h2>
        <p>{task.text}</p>
      </div>
    </>
  )
}
