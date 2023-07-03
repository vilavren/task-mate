import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import React from 'react'

import TaskStore from '../../stores/TaskStore'
import { Htag } from '../UI/Htag/Htag'

import styles from './OpenTask.module.css'
import { OpenTaskProps } from './OpenTask.props'

export const OpenTask: React.FC<OpenTaskProps> = observer(
  ({ className, ...props }) => {
    return (
      <div className={cn(className, styles.openTasks)} {...props}>
        <Htag tag="h2">{TaskStore.openTask.title}</Htag>
        <p className={styles.text}>{TaskStore.openTask.text}</p>
      </div>
    )
  }
)
