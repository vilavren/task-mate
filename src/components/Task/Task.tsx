import {
  DeleteOutlined,
  PlusOutlined,
  RightOutlined,
} from '@ant-design/icons/lib/icons'
import { Checkbox } from 'antd'
import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'

import { ITask } from '../../interfaces/task'
import TaskStore from '../../stores/TaskStore'
import { Htag } from '../UI/Htag/Htag'
import { Input } from '../UI/Input/Input'

import styles from './Task.module.css'
import { TaskProps } from './Task.props'

export const Task: React.FC<TaskProps> = observer(
  ({ className, task, htag, subHtag, ...props }) => {
    const [openSubtask, setOpenSubtask] = useState(false)
    const [openInput, setOpenInput] = useState(false)

    const handleOpenSubtask = () => {
      setOpenSubtask(!openSubtask)
    }
    const handleOpenInput = () => {
      setOpenInput(!openInput)
    }

    const handleOpenTask = (task: ITask) => {
      TaskStore.setOpenTask(task)
    }

    const handleTaskToggle = (id: string) => {
      TaskStore.completedTask(id)
    }

    const handleTaskRemove = (id: string) => {
      TaskStore.removeTask(id)
    }

    return (
      <li className={cn(className, styles.task)} {...props}>
        <RightOutlined
          rotate={openSubtask ? 90 : 0}
          className={styles.caret}
          onClick={handleOpenSubtask}
        />

        <Checkbox
          className={styles.checkbox}
          checked={task.completed}
          onChange={() => handleTaskToggle(task.id)}
        />

        <Htag
          className={styles.title}
          tag={htag}
          onClick={() => handleOpenTask(task)}
        >
          {task.title}
        </Htag>

        <PlusOutlined
          className={styles.plusAddTask}
          onClick={handleOpenInput}
        />
        {openInput && (
          <Input
            className={styles.input}
            placeholder="Новая подзадача..."
            tasks={task.subtasks}
            setOpenSubtask={setOpenSubtask}
          />
        )}

        <DeleteOutlined
          className={styles.removeButton}
          onClick={() => {
            handleTaskRemove(task.id)
          }}
        />

        {openSubtask && task.subtasks && (
          <ul>
            {task.subtasks.map((st) => (
              <Task
                className={styles.subTask}
                key={st.id}
                task={st}
                htag={subHtag}
                subHtag={subHtag}
              />
            ))}
            {task.subtasks.length > 0 && (
              <>
                <PlusOutlined className={styles.plusAddSubtask} />
                <Input
                  className={styles.inputSubtask}
                  placeholder="Новая подзадача..."
                  tasks={task.subtasks}
                  setOpenSubtask={setOpenSubtask}
                />
              </>
            )}
          </ul>
        )}
      </li>
    )
  }
)
