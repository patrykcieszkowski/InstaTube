import React from 'react'
import { css } from 'aphrodite'
import { Col, Row } from 'reactstrap'

import style from '../style'

const AddInstagram = props => (
  <Row>
    <Col xs='12' className={css(style.button.buttonWrapper)}>
      <a href='#' className={css(style.button.button)} onClick={props.onClick}>
        Link Instagram Account
      </a>
    </Col>
  </Row>
)

export default AddInstagram
