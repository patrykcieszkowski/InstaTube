import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'

import style from './style'

import PaymentForm from './partials/PaymentForm'
import Alert from '../FormAlert'

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
    <Col
      className={`d-xl-flex align-items-xl-center justify-content-xl-center`}
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
          <Alert
            {...paymentAlert}
            onClick={props.onAlertClick}
          />
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
    </Col>
  )
}

export default Payment
