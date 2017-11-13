import React from 'react'
import { css } from 'aphrodite'
import { FormGroup, Col, Row } from 'reactstrap'

import style from '../style'

const RenderError = props => {
  if (!props.error) {
    return null
  }

  return (
    <Row className={css(style.errors.fileErrorWrapper)}>
      <Col className={css(style.errors.fileErrorBox)} xs="10">
        <span className={css(style.errors.fileErrorSpan)}>
          {props.error}
        </span>
      </Col>
    </Row>
  )
}

export default RenderError
