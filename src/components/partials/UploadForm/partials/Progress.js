import React from 'react'
import { css } from 'aphrodite'
import { Col, Row } from 'reactstrap'

/* eslint-disable no-unused-vars */
import { inject, observer } from 'mobx-react'
/* eslint-enable no-unused-vars */

import style from '../style'

@inject('uploadform')
@observer
export class Progress extends React.Component {
  render () {
    return (
      <Col className={css(style.status.wrapper)} style={this.props.style}>
        <Row className={css(style.status.infoBox, style.status.progress)}>
          <Col
            xs='auto'
            className={css(style.status.col, style.status.iconWrapper)}
          />
          <Col
            className={`${css(
              style.status.col
            )} d-flex justify-content-center align-items-center`}
          >
            <h4 className={css(style.status.h4)}>
              Your file is being uploaded...
            </h4>
          </Col>
          <Col xs='1' className={css(style.status.col)} />
        </Row>
        <Row className={css(style.progress.wrapper)}>
          <Col className={css(style.progress.block)}>
            <div
              className={css(style.progress.bar)}
              style={{ width: `${this.props.uploadform.progress}%` }}
            />
            <span className={css(style.progress.progressSpan)}>
              {this.props.uploadform.progress}%
            </span>
          </Col>
        </Row>
      </Col>
    )
  }
}

export default Progress
