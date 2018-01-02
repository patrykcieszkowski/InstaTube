import React from 'react'
import { css } from 'aphrodite'
import { Button, Col, Row } from 'reactstrap'

import style from '../style'

export const Error = props => (
  <Col className={css(style.status.wrapper)} style={props.style}>
    <Row className={css(style.status.infoBox, style.status.error)}>
      <Col xs='1' className={css(style.status.col)} />
      <Col
        xs='auto'
        className={`${css(style.status.col, style.status.iconWrapper)}
        d-flex justify-content-center align-items-center`}
      >
        <i
          className={`la la-close ${css(style.status.icon)}`}
          aria-hidden='true'
          title='success'
        />
      </Col>
      <Col
        className={`${css(
          style.status.col
        )} d-flex justify-content-center align-items-center`}
      >
        <RenderErrorHeader {...props} />
      </Col>
      <Col xs='1' className={css(style.status.col)} />
    </Row>

    <Row className={css(style.status.buttonWrapper)}>
      <Button className={css(style.status.button)} onClick={props.onClick}>
        Try again
      </Button>
    </Row>
  </Col>
)

const RenderErrorHeader = props => {
  if (props.error) {
    return <h4 className={css(style.status.h4)}>{props.error}</h4>
  }

  return <h4 className={css(style.status.h4)}>Uups! There was an error!</h4>
}

export default Error
