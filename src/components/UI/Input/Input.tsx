import cn from 'classnames'
import React, { useState } from 'react'

import styles from './Input.module.css'
import { InputProps } from './Input.props'

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  const [newTaskText, setNewTaskText] = useState('')

  return (
    <input
      type="text"
      value={newTaskText}
      placeholder="Новая задача"
      onChange={(e) => setNewTaskText(e.target.value)}
      className={cn(className, styles.input)}
      {...props}
    />
  )
}
