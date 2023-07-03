import cn from 'classnames'
import React from 'react'

import styles from './Htag.module.css'
import { HtagProps } from './Htag.props'

export const Htag: React.FC<HtagProps> = ({
  className,
  tag,
  onClick,
  children,
  ...props
}) => {
  switch (tag) {
    case 'h1':
      return (
        <h1 className={cn(className, styles.h1)} {...props} onClick={onClick}>
          {children}
        </h1>
      )
    case 'h2':
      return (
        <h2 className={cn(className, styles.h2)} {...props} onClick={onClick}>
          {children}
        </h2>
      )
    case 'h3':
      return (
        <h3 className={cn(className, styles.h3)} {...props} onClick={onClick}>
          {children}
        </h3>
      )
    case 'h4':
      return (
        <h4 className={cn(className, styles.h4)} {...props} onClick={onClick}>
          {children}
        </h4>
      )
    default:
      return <></>
  }
}
