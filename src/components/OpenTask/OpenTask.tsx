import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import React from 'react'

import TaskStore from '../../stores/TaskStore'
import { Htag } from '../UI/Htag/Htag'

import styles from './OpenTask.module.css'
import { OpenTaskProps } from './OpenTask.props'

export const OpenTask: React.FC<OpenTaskProps> = observer(
  ({ className, ...props }) => {
    const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      TaskStore.openTask.text = e.target.value
      e.target.value = ''
    }

    return (
      <div className={cn(className, styles.openTasks)} {...props}>
        <Htag tag="h2">{TaskStore.openTask.title}</Htag>
        <textarea
          placeholder="Текст..."
          className={styles.text}
          value={TaskStore.openTask.text}
          onChange={handleChangeText}
        />
      </div>
    )
  }
)
