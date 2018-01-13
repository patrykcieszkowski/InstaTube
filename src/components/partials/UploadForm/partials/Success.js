import React from 'react'
import { css } from 'aphrodite'
import { Button, Col, Row } from 'reactstrap'

import style from '../style'

export const Success = props => (
  <Col className={css(style.status.wrapper)} style={props.style}>
    <Row className={css(style.status.infoBox, style.status.success)}>
      <Col xs='1' className={css(style.status.col)} />
      <Col
        xs='auto'
        className={`${css(style.status.col, style.status.iconWrapper)}
        d-flex justify-content-center align-items-center`}
      >
        <i
          className={`la la-check-circle-o ${css(style.status.icon)}`}
          aria-hidden='true'
          title='success'
        />
      </Col>
      <Col
        className={`${css(
          style.status.col
        )} d-flex justify-content-center align-items-center`}
      >
        <h4 className={css(style.status.h4)}>Your file has been uploaded!</h4>
      </Col>
      <Col xs='1' className={css(style.status.col)} />
    </Row>
    <Row className={css(style.status.inputWrapper)}>
      <input
        type='text'
        className={css(style.status.input)}
        value={props.url}
        readOnly
      />
    </Row>
    <Row className={css(style.status.buttonWrapper)}>
      <Button
        className={css(style.status.button)}
        onClick={props.onCopyLinkClick}
      >
        Copy link
      </Button>
    </Row>
    <Row className={css(style.status.buttonWrapper)}>
      <Button
        className={css(style.status.button, style.status.resetButton)}
        onClick={props.onBackLinkClick}
      >
        Upload Another File!
      </Button>
    </Row>
  </Col>
)

export default Success
