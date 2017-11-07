import React from 'react'
import { css } from 'aphrodite'
import { Input, Button, Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'

import style from '../style'

export const Success = props => (
  <Col className={css(style.status.wrapper)} style={props.style}>
    <Row className={css(style.status.infoBox, style.status.success)}>
      <Col xs="1" className={css(style.status.col)} />
      <Col
        xs="1"
        className={`${css(
          style.status.col
        )}  d-flex justify-content-center align-items-center`}
      >
        <i
          className={`la la-check-circle-o ${css(style.status.icon)}`}
          aria-hidden="true"
          title="success"
        />
      </Col>
      <Col
        className={`${css(
          style.status.col
        )} d-flex justify-content-center align-items-center`}
      >
        <h4 className={css(style.status.h4)}>Your file has been uploaded!</h4>
      </Col>
      <Col xs="1" className={css(style.status.col)} />
    </Row>
    <Row className={css(style.status.inputWrapper)}>
      <input
        type="text"
        className={css(style.status.input)}
        value={`http://in.pl/asdd21`}
      />
    </Row>
    <Row className={css(style.status.buttonWrapper)}>
      <Button
        className={css(style.status.button)}
        onClick={props.onCopyLinkClick}
      >
        Copy link to clipboard
      </Button>
    </Row>
  </Col>
)

export default Success
