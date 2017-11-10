import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'

import style from '../../../style'

export const PayoutHistoryItem = ({ item }) => {
  const statusList = ['fail', 'pending', 'complete']
  const currentStatus = statusList[item.id_status + 1]

  return (
    <Row className={css(style.history.box)}>
      <Col xs="12" className={css(style.history.innerWrapper)}>
        <Row>
          <Col xs="1">
            <div className={css(style.circle.circle, style.circle[currentStatus])} />
          </Col>
          <Col xs="4">
            <span className={css(style.history.statusSpan)}>{ item.file }</span>
          </Col>
          <Col xs="3">
            <span className={css(style.history.amountSpan)}>${ item.pay }</span>
          </Col>
          <Col xs="4">
            <span className={css(style.history.dateSpan)}>{ item.date }</span>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default PayoutHistoryItem
