import React from 'react'
import { css } from 'aphrodite'
import { Col, Row } from 'reactstrap'

import style from '../style'

const Withdraw = props => [
  <Row key={0}>
    <Col xs="12">
      <span className={css(style.withdraw.amountSpan)}>$312.32</span>
    </Col>
  </Row>,
  <Row key={1}>
    <Col xs="12" className={css(style.withdraw.buttonWrapper)}>
      <a href="#" className={css(style.withdraw.button)}>
        Withdraw
      </a>
    </Col>
  </Row>
]

export default Withdraw
