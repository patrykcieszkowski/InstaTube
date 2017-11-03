import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'

import style from '../../../style'

export const PaymentsListTitles = props => (
  <Row>
    <Col xl="2">
      <span className={css(style.payments.titleBlockSpan)}>ID</span>
    </Col>
    <Col xl="4">
      <span className={css(style.payments.titleBlockSpan)}>File</span>
    </Col>
    <Col xl="2">
      <span className={css(style.payments.titleBlockSpan)}>Pay</span>
    </Col>
    <Col xl="4">
      <span className={css(style.payments.titleBlockSpan)}>Date</span>
    </Col>
  </Row>
)

export default PaymentsListTitles
