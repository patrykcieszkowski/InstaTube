import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

import style from './style'

export class SidebarContent extends React.Component {
  render() {
    return [
      <Row key={1}>
        <Col
          xl="auto"
          className={`d-none ${(this.props.md || this.props.sm) ? '' : 'd-xl-block'}
          ${css(
            style.header.box,
            style.header.sider
          )}`}
        />
        <Col xs="8" xl="5" className={css(style.header.box)}>
          <h2 className={css(style.header.h2)}>{this.props.title}</h2>
        </Col>
        <Col
          className={`d-flex align-content-center justify-content-end ${css(
            style.header.box
          )}`}
        >
          <Link to={this.props.homePath}>
            <i
              className={`la la-close ${css(style.header.closeIcon)}`}
              aria-hidden="true"
              title="close"
            />
          </Link>
        </Col>
      </Row>,
      <Row key={2} className={css(style.content.wrapper)}>
        {this.props.children}
      </Row>
    ]
  }
}

export default SidebarContent
