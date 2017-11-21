import React from 'react'
import { css } from 'aphrodite'
import { Col, Row } from 'reactstrap'
import Error from './Error'

import style from '../style'

const Withdraw = props => (
  <Row>
    <Col xs='12'>
      <Error error={props.error} />
    </Col>
    <Col xs='12' xl='5'>
      <Row>
        <Col
          xs='12'
          className={`d-flex align-items-center justify-content-center`}
        >
          <span className={css(style.withdraw.amountSpan)}>
            {props.withdraw}
            {props.currency}
          </span>
        </Col>
        <Col
          xs='12'
          className={`d-flex align-items-center justify-content-end`}
        >
          <span className={css(style.withdraw.provisionSpan)}>
            PROVISION: <span>{props.provision}</span>
            {props.currency}
          </span>
        </Col>
      </Row>
    </Col>
    <Col xs='12' xl='7' className={css(style.withdraw.buttonWrapper)}>
      <Row>
        <Col xs='12'>
          <a
            href='#'
            className={css(style.withdraw.button)}
            onClick={props.onWithdrawClick}
          >
            Withdraw
          </a>
        </Col>
        <Col
          xs='12'
          className={`d-flex align-items-center justify-content-center`}
        >
          <span className={css(style.withdraw.totalSpan)}>
            TOTAL:{' '}
            <span className={css(style.withdraw.totalSpanAmount)}>
              {props.total}
            </span>
            {props.currency}
          </span>
        </Col>
      </Row>
    </Col>
  </Row>
)

export default Withdraw
