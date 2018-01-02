import React from 'react'
import { css } from 'aphrodite/no-important'

import style from './style'

export const SidebarHeader = props => (
  <div
    className={`${css(
      style.header.box,
      props.paddingSides
        ? props.md
          ? style.header.boxMdPaddingSides
          : style.header.boxPaddingSides
        : '',
      props.paddingTop
        ? props.md ? style.header.boxMdPaddingTop : style.header.boxPaddingTop
        : '',
      props.paddingBottom
        ? props.md
          ? style.header.boxMdPaddingBottom
          : style.header.boxPaddingBottom
        : ''
    )} ${props.className || ''}`}
    style={props.style || {}}
  >
    <h2 className={css(style.header.h2)} style={props.testStyle || {}}>
      {props.title}
    </h2>
  </div>
)

export default SidebarHeader
