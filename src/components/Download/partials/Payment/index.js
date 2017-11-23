import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'

import style from './style'

import PaymentForm from './partials/PaymentForm'
import ScrollArea from '../../../partials/ScrollArea'
import Alert from '../../../partials/FormAlert'

const Payment = props => {
  const paymentResponse = props.payment.response
  const paymentAlert =
    paymentResponse || props.state.error
      ? {
        alert: 'danger',
        content: props.state.error,
        success: false
      }
      : {}

  return (
    <ScrollArea
      style={{
        width: `100%`,
        height: `calc(100% - 80px)`,
        overflowX: `hidden`
      }}
      renderClassName={`d-flex align-items-center justify-content-center row`}
    >
      <Row style={{ margin: 0 }}>
        <Col xs='12' className={css(style.image.wrapper)}>
          <img
            src='/img/tinfield/step-2_03.png'
            alt='tinfield'
            className={css(style.image.img)}
          />
        </Col>
        <Col xs='12' className={css(style.image.wrapper)}>
          <img
            src='/img/tinfield/step-2_07.png'
            alt='tinfield'
            className={css(style.image.img)}
          />
        </Col>
        <Col xs='12'>
          <Alert {...paymentAlert} />
        </Col>
        <Col xs='12'>
          <PaymentForm
            onTextChange={props.onTextChange}
            onFormSubmit={props.onPaymentFormSubmit}
            onRulesClick={props.onRulesClick}
            state={props.state}
          />
        </Col>
      </Row>
    </ScrollArea>
  )
}

export default Payment
