import { RightOutlined } from '@ant-design/icons/lib/icons'
import { Checkbox } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import React from 'react'

import TaskStore from '../../stores/TaskStore'
import { Button } from '../UI/Button/Button'
import { Htag } from '../UI/Htag/Htag'
import { Input } from '../UI/Input/Input'

import styles from './Task.module.css'
import { TaskProps } from './Task.props'

export const Task: React.FC<TaskProps> = observer(
  ({ className, task, htag, subHtag, ...props }) => {
    const completedTask = (id: string) => {
      TaskStore.completedTask(id)
    }

    return (
      <li className={cn(className, styles.task)} {...props}>
        <RightOutlined className={styles.caret} />

        <Checkbox
          className={styles.checkbox}
          checked={task.completed}
          onChange={() => completedTask(task.id)}
        />

        <Htag tag={htag}>{task.title}</Htag>
        <Button />

        {task.subtasks && (
          <ul className={styles.subTasks}>
            {task.subtasks.map((st) => (
              <Task
                className={styles.subTask}
                htag={subHtag}
                subHtag={subHtag}
                key={st.id}
                task={st}
              />
            ))}
            <Input className={styles.input} placeholder="Новая подзадача..." />
          </ul>
        )}
      </li>
    )
  }
)
