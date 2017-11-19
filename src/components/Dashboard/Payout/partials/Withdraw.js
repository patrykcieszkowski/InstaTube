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
    <Col
      xs='12'
      xl='5'
      className={`d-flex align-items-center justify-content-center`}
    >
      <span className={css(style.withdraw.amountSpan)}>
        ${props.dashboard.total}
      </span>
    </Col>
    <Col xs='12' xl='7' className={css(style.withdraw.buttonWrapper)}>
      <a
        href='#'
        className={css(style.withdraw.button)}
        onClick={props.onWithdrawClick}
      >
        Withdraw
      </a>
    </Col>
  </Row>
)

export default Withdraw
