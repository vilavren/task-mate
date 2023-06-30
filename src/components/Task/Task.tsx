import { Checkbox } from 'antd'
import React from 'react'

import { TaskProps } from './Task.props'

export const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <li key={task.id}>
      <Checkbox>{task.title}</Checkbox>
    </li>
  )
}
