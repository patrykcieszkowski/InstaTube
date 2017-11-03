import React from 'react'
import { Row, Col } from 'reactstrap'
import { css } from 'aphrodite'

import style from '../../../style'

export const PaymentsListItem = props => (
  <Row className={css(style.payments.box)}>
    <Col xs="2" className={`d-flex justify-content-center align-items-center`}>
      <span
        className={css(
          style.payments.valueSpan,
          style.payments.text,
          style.payments.idSpan
        )}
      >
        {props.item.id}
      </span>
    </Col>
    <Col xs="4" className={`d-flex justify-content-center align-items-center`}>
      <span
        className={css(
          style.payments.valueSpan,
          style.payments.text,
          style.payments.titleSpan
        )}
      >
        {props.item.title}
      </span>
    </Col>
    <Col xs="2" className={`d-flex justify-content-center align-items-center`}>
      <span
        className={css(
          style.payments.valueSpan,
          style.payments.text,
          style.payments.priceSpan
        )}
      >
        ${props.item.total}
      </span>
    </Col>
    <Col xs="4" className={`d-flex justify-content-center align-items-center`}>
      <span
        className={css(
          style.payments.valueSpan,
          style.payments.text,
          style.payments.dateSpan
        )}
      >
        {props.item.date}
      </span>
    </Col>
  </Row>
)

export default PaymentsListItem
