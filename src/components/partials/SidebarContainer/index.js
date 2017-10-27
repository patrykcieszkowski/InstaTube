import React from 'react'
import { css } from 'aphrodite'

import style from './style'

export class SidebarContainer extends React.Component {
  render() {
    return (
      <div
        className={css(
          style.main.container,
          this.props.isOpen ? style.main.active : '',
          this.props.stickToTop ? style.main.stickToTop : ''
        )}
      >
        {this.props.children}
      </div>
    )
  }
}

export default SidebarContainer
