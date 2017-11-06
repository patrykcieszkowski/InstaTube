import React from 'react'
import { css } from 'aphrodite'

import style from './style'

export class SidebarContainer extends React.Component {
  render() {
    return (
      <div
        className={`${css(
          style.main.container,
          this.props.md ? style.main.mdSize : '',
          this.props.sm ? style.main.smize : '',
          !(this.props.sm || this.props.md) ? style.main.lgSize : '',
          this.props.stickToTop ? style.main.stickToTop : '',
          this.props.stickToTopXLG ? style.main['xlg-stickToTop'] : '',
          this.props.fullHeight ? style.main.fullHeight : ''
        )} ${css(this.props.isOpen ? style.main.active : '')}`}
      >
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
