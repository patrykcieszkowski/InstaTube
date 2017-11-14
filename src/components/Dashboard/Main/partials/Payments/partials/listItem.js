import React from 'react'
import { Row, Col } from 'reactstrap'
import { css } from 'aphrodite'

import style from '../../../style'

  export const PaymentsListItem = props => {
    
  const date = new Date(props.item.date)

    return (
      <Row className={css(style.payments.box)} title={props.item.title}>
        <Col xs="2" className={`d-flex justify-content-center align-items-center`}>
          <span
            className={css(
              style.payments.valueSpan,
              style.payments.text,
              style.payments.idSpan
            )}
          >
            { props.item.id || -1 }
          </span>
        </Col>
        <Col xs="4" className={`d-flex justify-content-center align-items-center`}>
          <span
            className={css(
              style.payments.valueSpan,
              style.payments.text,
              style.payments.titleSpan,
              style.payments.nameTextSpan
            )}
          >
            { props.item.name }
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
            ${props.item.amount}
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
            { `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}` }
          </span>
        </Col>
      </Row>
    )
  }

export default PaymentsListItem
