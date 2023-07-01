import cn from 'classnames'
import React from 'react'

import { WrapperTasks } from '../WrapperTasks/WrapperTasks'

import styles from './Layout.module.css'
import { LayoutProps } from './Layout.props'

export const Layout: React.FC<LayoutProps> = ({ className, ...props }) => {
  return (
    <div className={cn(className, styles.layout)} {...props}>
      <WrapperTasks />
    </div>
  )
}
