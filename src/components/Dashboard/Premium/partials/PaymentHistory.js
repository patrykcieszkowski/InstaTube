import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'

import style from '../style'

import ScrollArea from '../../../partials/ScrollArea'

export const PaymentHistory = props => (
  <Row className={`${css(style.main.mainRow)}`}>
    <Col xs="12" className={`${css(style.history.titleWrapper)}`}>
      <h4 className={css(style.history.h4)}>history</h4>
    </Col>
    <Col xs="12" className={`${css(style.history.contentWrapper)}`}>
      <ScrollArea
        style={{ width: '100%', height: `calc(100% - 220px)` }}
        autoHide={true}
        autoHideTimeout={1000}
        autoHideDuration={200}
      >
        <PaymentHistoryItem key={1} />
        <PaymentHistoryItem key={2} />
      </ScrollArea>
    </Col>
  </Row>
)

export const PaymentHistoryItem = props => (
  <Row className={css(style.history.box)}>
    <Col xs="12" className={css(style.history.innerWrapper)}>
      <Row>
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
    </Col>
  </Row>
)

export default PaymentHistory
