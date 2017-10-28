import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'

import style from '../style'

export const PayoutHistory = props => [
  <Row key={0}>
    <Col xs="1" />
    <Col xs="4">
      <span className={css(style.history.titleSpan)}>Status</span>
    </Col>
    <Col xs="3">
      <span
        className={css(style.history.titleSpan, style.history.totalTitleSpan)}
      >
        Total
      </span>
    </Col>
    <Col xs="4">
      <span
        className={css(style.history.titleSpan, style.history.totalDateSpan)}
      >
        Date
      </span>
    </Col>
  </Row>,
  <PayoutHistoryItem key={1} />,
  <PayoutHistoryItem key={2} />
]

export const PayoutHistoryItem = props => (
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

export default PayoutHistory
