import { Checkbox } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'
import cn from 'classnames'
import React from 'react'

import styles from './Task.module.css'
import { TaskProps } from './Task.props'

export const Task: React.FC<TaskProps> = ({ className, task, ...props }) => {
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`)
  }

  return (
    <li className={cn(className, styles.input)} {...props}>
      <Checkbox checked={task.completed} onChange={onChange}>
        {task.title}
      </Checkbox>

      {task.subtasks && (
        <ul>
          {task.subtasks.map((st) => (
            <Task key={st.id} task={st} />
          ))}
        </ul>
      )}
    </li>
  )
}
