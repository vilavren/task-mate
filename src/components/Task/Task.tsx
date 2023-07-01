import { Checkbox } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'
import React from 'react'

import { TaskProps } from './Task.props'

export const Task: React.FC<TaskProps> = ({ task }) => {
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`)
  }

  return (
    <li key={task.id}>
      <Checkbox checked={task.completed} onChange={onChange}>
        {task.title}
      </Checkbox>

      {task.subtasks &&
        task.subtasks.map((st) => <Task key={st.id} task={st} />)}
    </li>
  )
}
