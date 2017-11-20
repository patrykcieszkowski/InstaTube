import React from 'react'
import { css } from 'aphrodite'
import { Col, Row } from 'reactstrap'

import style from './style'

const RenderAlert = props => {
  if (!props.alert) {
    return null
  }

  return (
    <Row className={css(style.alert.fileAlertWrapper, style.alert[props.alert])}>
      <Col className={css(style.alert.fileAlertBox)} xs='10'>
        <span
          className={css(style.alert.fileAlertSpan)}
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </Col>
    </Row>
  )
}

export default RenderAlert
