import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'

import style from '../../../style'

export const PayoutHistoryTitles = props => (
  <Row className={css(style.history.titleRowWrapper)}>
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
  </Row>
)

export default PayoutHistoryTitles
