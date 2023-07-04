import { CloseCircleOutlined, PlusOutlined } from '@ant-design/icons/lib/icons'
import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'

import TaskStore from '../../stores/TaskStore'
import { findTaskByTitle } from '../../utils/findTaskByTitle'
import { Task } from '../Task/Task'
import { Input } from '../UI/Input/Input'

import styles from './Tasks.module.css'
import { TasksProps } from './Tasks.props'

export const Tasks: React.FC<TasksProps> = observer(
  ({ className, ...props }) => {
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
      const json = JSON.stringify(TaskStore.tasks)
      localStorage.setItem('tasks', json)
      console.log('тут')
    }, [TaskStore.tasks])

    const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value)
    }

    const filtredTasks = findTaskByTitle(TaskStore.tasks, searchValue)

    return (
      <div className={cn(className, styles.tasks)} {...props}>
        <Input
          className={styles.inputSearch}
          placeholder="Поиск по задачам"
          value={searchValue}
          onChange={onChangeSearchInput}
        >
          <CloseCircleOutlined
            className={styles.removeButton}
            onClick={() => setSearchValue('')}
          />
        </Input>
        <ul>
          {filtredTasks.map((t) => (
            <Task htag="h3" subHtag="h4" key={t.id} task={t} />
          ))}
          <div className={styles.wrapperAddTask}>
            <PlusOutlined className={styles.plusAddTask} />
            <Input
              tasks={TaskStore.tasks}
              className={styles.input}
              placeholder="Новая задача..."
            />
          </div>
        </ul>
      </div>
    )
  }
)
