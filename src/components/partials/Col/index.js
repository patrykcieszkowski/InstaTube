import React from 'react'
import { css } from 'aphrodite'

import style from './style'

const parseClassName = (size, name) =>
  size ? `col${name ? `-${name}` : ''}${size.length ? `-${size}` : ''}` : null
const parseCustomClassName = (size, name) =>
  size ? css(style.size[`col-${name}${size.length ? `-${size}` : ''}`]) : null

const renderClassName = props =>
  [
    parseClassName(props.xs),
    parseClassName(props.sm, 'sm'),
    parseClassName(props.md, 'md'),
    parseClassName(props.lg, 'lg'),
    parseClassName(props.xl, 'xl'),
    parseCustomClassName(props.xxl, 'xxl'),
    parseCustomClassName(props.xxxl, 'xxxl'),
    parseCustomClassName(props.xxxxl, 'xxxxl'),
    props.className
  ]
    .filter(a => a)
    .join(' ')

export const Column = props => (
  <div className={renderClassName(props)}>{props.children}</div>
)

export default Column
