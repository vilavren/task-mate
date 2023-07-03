import cn from 'classnames'
import React, { useState } from 'react'

import { ITask } from '../../../interfaces/task'
import TaskStore from '../../../stores/TaskStore'

import styles from './Input.module.css'
import { InputProps } from './Input.props'

export const Input: React.FC<InputProps> = ({
  className,
  children,
  tasks,
  setOpenSubtask,
  ...props
}) => {
  const [newTaskText, setNewTaskText] = useState('')

  const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewTaskText(e.target.value)

  const handleTaskAdd = (
    e: React.KeyboardEvent<HTMLInputElement>,
    tasks?: ITask[]
  ) => {
    if (tasks && e.key === 'Enter') {
      TaskStore.addTask(newTaskText, tasks)
      setNewTaskText('')
      {
        setOpenSubtask && setOpenSubtask(true)
      }
    }
  }

  return (
    <div className={cn(className, styles.form)}>
      <input
        value={newTaskText}
        onChange={handleInputOnChange}
        onKeyDown={(e) => handleTaskAdd(e, tasks)}
        type="text"
        className={styles.input}
        {...props}
      />
      {children}
    </div>
  )
}
