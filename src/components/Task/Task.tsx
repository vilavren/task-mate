import { RightOutlined } from '@ant-design/icons/lib/icons'
import { Checkbox } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'
import cn from 'classnames'
import React from 'react'

import { Htag } from '../UI/Htag/Htag'

import styles from './Task.module.css'
import { TaskProps } from './Task.props'

export const Task: React.FC<TaskProps> = ({
  className,
  task,
  htag,
  subHtag,
  ...props
}) => {
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`)
  }

  return (
    <li className={cn(className, styles.task)} {...props}>
      <RightOutlined className={styles.caret} />

      <Checkbox
        className={styles.checkbox}
        checked={task.completed}
        onChange={onChange}
      />

      <Htag tag={htag}>{task.title}</Htag>

      {task.subtasks && (
        <ul>
          {task.subtasks.map((st) => (
            <Task htag={subHtag} subHtag={subHtag} key={st.id} task={st} />
          ))}
        </ul>
      )}
    </li>
  )
}
