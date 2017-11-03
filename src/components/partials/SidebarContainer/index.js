import React from 'react'
import { css } from 'aphrodite'

import style from './style'

export class SidebarContainer extends React.Component {
  render() {
    return (
      <div
        className={css(
          style.main.container,
          this.props.isOpen
            ? this.props.md
              ? style.main.mdActive
              : this.props.sm ? style.main.smActive : style.main.lgActive
            : '',
          this.props.stickToTop ? style.main.stickToTop : '',
          this.props.stickToTopXLG ? style.main['xlg-stickToTop'] : '',
          this.props.fullHeight ? style.main.fullHeight : ''
        )}
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
