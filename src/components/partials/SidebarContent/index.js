import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

import style from './style'

export class SidebarContent extends React.Component {
  render() {
    return [
      <Row key={1}>
        <Col xs="8">
          <h2 className={css(style.header.h2)}>{this.props.title}</h2>
        </Col>
        <Col className={`d-flex align-content-center justify-content-end`}>
          <Link to={this.props.homePath}>
            <i
              className={`la la-close ${css(style.header.closeIcon)}`}
              aria-hidden="true"
              title="close"
            />
          </Link>
        </Col>
      </Row>,
      <Row key={2}>{this.props.children}</Row>
    ]
  }
}

export default SidebarContent
