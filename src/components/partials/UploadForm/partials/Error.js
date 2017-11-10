import React from 'react'
import { css } from 'aphrodite'
import { Input, Button, Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'

import style from '../style'

export const Error = props => (
  <Col className={css(style.status.wrapper)} style={props.style}>
    <Row className={css(style.status.infoBox, style.status.error)}>
      <Col xs="1" className={css(style.status.col)} />
      <Col
        xs="1"
        className={`${css(
          style.status.col
        )}  d-flex justify-content-center align-items-center`}
      >
        <i
          className={`la la-close ${css(style.status.icon)}`}
          aria-hidden="true"
          title="success"
        />
      </Col>
      <Col
        className={`${css(
          style.status.col
        )} d-flex justify-content-center align-items-center`}
      >
        <h4 className={css(style.status.h4)}>Uups! There was an error!</h4>
      </Col>
      <Col xs="1" className={css(style.status.col)} />
    </Row>

    <Row className={css(style.status.buttonWrapper)}>
      <Button
        className={css(style.status.button)}
        onClick={props.onClick}
      >
        Try again
      </Button>
    </Row>
  </Col>
)

export default Error