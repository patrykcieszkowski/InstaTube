import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'

import style from '../style'

export const PaymentHistory = props => [
  <Row key={0} >
    <Col>
      <h4 className={css(style.history.h4)}>history</h4>
    </Col>
  </Row>,
  <PaymentHistoryItem key={1} />,
  <PaymentHistoryItem key={2} />
]

export const PaymentHistoryItem = props => (
  <Row className={css(style.history.box)}>
    <Col xs="1">
      <div className={css(style.circle.circle, style.circle.pending)} />
    </Col>
    <Col xs="4">
      <span className={css(style.history.statusSpan)}>Complete</span>
    </Col>
    <Col xs="3">
      <span className={css(style.history.amountSpan)}>$180</span>
    </Col>
    <Col xs="4">
      <span className={css(style.history.dateSpan)}>23-12-2017</span>
    </Col>
  </Row>
)

export default PaymentHistory
