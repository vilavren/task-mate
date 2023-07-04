import {
  DeleteOutlined,
  PlusOutlined,
  RightOutlined,
  StopOutlined,
} from '@ant-design/icons/lib/icons'
import { Checkbox } from 'antd'
import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'

import { ITask } from '../../interfaces/task'
import TaskStore from '../../stores/TaskStore'
import { setTaskFromLS } from '../../utils/setTaskFromLS'
import { Htag } from '../UI/Htag/Htag'
import { Input } from '../UI/Input/Input'

import styles from './Task.module.css'
import { TaskProps } from './Task.props'

export const Task: React.FC<TaskProps> = observer(
  ({ className, task, htag, subHtag, ...props }) => {
    const [openInput, setOpenInput] = useState(false)

    const handleOpenSubtask = () => {
      task.openSubtask = !task.openSubtask
      setTaskFromLS()
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
        <div
          onClick={() => handleOpenTask(task)}
          className={styles.titleWrapper}
        >
          {task.subtasks?.length > 0 ? (
            <RightOutlined
              rotate={task.openSubtask ? 90 : 0}
              className={styles.caret}
              onClick={handleOpenSubtask}
            />
          ) : (
            <StopOutlined className={styles.stop} />
          )}

          <Checkbox
            className={styles.checkbox}
            checked={task.completed}
            onChange={() => handleTaskToggle(task.id)}
          />

          <Htag className={styles.title} tag={htag}>
            {task.title}
          </Htag>

          {task.subtasks?.length === 0 && (
            <>
              <PlusOutlined
                className={styles.plusAddTask}
                onClick={handleOpenInput}
              />
              {openInput && (
                <Input
                  className={styles.input}
                  placeholder="Новая подзадача..."
                  tasks={task.subtasks}
                  task={task}
                />
              )}
            </>
          )}

          <DeleteOutlined
            className={styles.removeButton}
            onClick={() => {
              handleTaskRemove(task.id)
            }}
          />
        </div>

        {task.openSubtask && task.subtasks && (
          <ul className={styles.WrapperSubtask}>
            {task.subtasks.map((st) => (
              <Task
                className={styles.subtask}
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
                />
              </>
            )}
          </ul>
        )}
      </li>
    )
  }
)
