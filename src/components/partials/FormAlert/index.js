import React from 'react'
import { css } from 'aphrodite'
import { Col, Row } from 'reactstrap'

import style from './style'

const RenderAlert = props => {
  const alert = props.content && props.alert ? props.alert : 'hide'

  return (
    <Row 
      className={css(style.alert.fileAlertWrapper, style.alert[alert])}
      onClick={props.onClick}
    >
      <Col className={css(style.alert.fileAlertBox)} xs='10'>
        <span
          className={css(style.alert.fileAlertSpan)}
          dangerouslySetInnerHTML={{ __html: props.content || '' }}
        />
      </Col>
    </Row>
  )
}

export default RenderAlert
