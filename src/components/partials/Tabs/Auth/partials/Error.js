import React from 'react'
import { css } from 'aphrodite'
import { Col, Row } from 'reactstrap'

import style from '../style'

const RenderError = props => {
  if (!props.error) {
    return null
  }

  return (
    <Row className={css(style.errors.fileErrorWrapper)}>
      <Col className={css(style.errors.fileErrorBox)} xs='10'>
        <span
          className={css(style.errors.fileErrorSpan)}
          dangerouslySetInnerHTML={{ __html: props.error }}
        />
      </Col>
    </Row>
  )
}

export default RenderError
