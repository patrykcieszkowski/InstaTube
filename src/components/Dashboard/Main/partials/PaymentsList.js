import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'

import style from '../style'

export const PaymentsList = () => [
  <PaymentsListItem key={0} />,
  <PaymentsListItem key={1} />,
  <PaymentsListItem key={2} />
]

export const PaymentsListItem = () => (
  <Row className={css(style.payments.box)}>
    <Col xs="2" className={`d-flex justify-content-center align-items-center`}>
      <span className={css(style.payments.text, style.payments.idSpan)}>
        1142
      </span>
    </Col>
    <Col xs="4" className={`d-flex justify-content-center align-items-center`}>
      <span className={css(style.payments.text, style.payments.titleSpan)}>
        Lorem ipsum sasa
      </span>
    </Col>
    <Col xs="2" className={`d-flex justify-content-center align-items-center`}>
      <span className={css(style.payments.text, style.payments.priceSpan)}>
        $5.00
      </span>
    </Col>
    <Col xs="4" className={`d-flex justify-content-center align-items-center`}>
      <span className={css(style.payments.text, style.payments.dateSpan)}>
        23-12-17 10:45:57
      </span>
    </Col>
  </Row>
)

export default PaymentsList
