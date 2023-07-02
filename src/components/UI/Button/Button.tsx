import { DeleteOutlined } from '@ant-design/icons/lib/icons'
import cn from 'classnames'
import React from 'react'

import styles from './Button.module.css'
import { ButtonProps } from './Button.props'

export const Button: React.FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <button className={cn(className, styles.button)} {...props}>
      <DeleteOutlined />
    </button>
  )
}
