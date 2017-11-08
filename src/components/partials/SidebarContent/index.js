import React from 'react'
import { css } from 'aphrodite'
import { Row } from 'reactstrap'
import { Link } from 'react-router-dom'

import style from './style'

export class SidebarContent extends React.Component {
  render () {
    return (
      <Row className={css(style.content.wrapper)}>
        <Link
          to={this.props.homePath}
          style={{
            display: this.props.close ? `block` : `none`
          }}
          className={css(
            style.header.closeButton,
            this.props.md
              ? style.header.mdCloseButton
              : style.header.lgCloseButton
          )}
        >
          <i
            className={`la la-close ${css(style.header.closeIcon)}`}
            aria-hidden='true'
            title='close'
          />
        </Link>
        {this.props.children}
      </Row>
    )
  }
}

export default SidebarContent
