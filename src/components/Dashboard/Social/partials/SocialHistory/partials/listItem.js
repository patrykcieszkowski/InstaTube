import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'

import style from '../../../style'

export const PayoutHistoryItem = props => {
  console.log(props)
  return (
    <Row className={css(style.history.box)}>
      <Col xs='12' className={css(style.history.innerWrapper)}>
        <Row>
          <Col xs='6'>
            <span className={css(style.history.valueSpan)}>@{props.item}</span>
          </Col>
          <Col xs='6'>
            <span className={css(style.history.valueSpan)}>{props.site}</span>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default PayoutHistoryItem
