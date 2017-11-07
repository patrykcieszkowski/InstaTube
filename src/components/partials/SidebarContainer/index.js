import React from 'react'
import { css } from 'aphrodite/no-important'

import style from './style'

const renderClassName = props =>
  [
    css(style.main.container),
    css(props.stickToTop ? style.main.stickToTop : ''),
    css(props.stickToTopXLG ? style.main['xlg-stickToTop'] : ''),
    css(props.fullHeight ? style.main.fullHeight : ''),
    css(props.md ? style.main.mdSize : ''),
    css(props.sm ? style.main.smSize : ''),
    css(props.lg ? style.main.lgSize : ''),
    css(props.xl ? style.main.xlSize : ''),
    css(!(props.sm || props.md || props.lg) ? style.main.xlSize : ''),
    css(props.isOpen ? style.main.active : '')
  ]
    .filter(a => a)
    .join(' ')

export class SidebarContainer extends React.Component {
  render() {
    return (
      <div className={renderClassName(this.props)}>
        <div
          className={css(
            style.nav.background,
            this.props.stickToTopXLG ? style.nav.active : ''
          )}
        />
        {this.props.children}
      </div>
    )
  }
}

export default SidebarContainer
