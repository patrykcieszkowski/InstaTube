import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'

import style from '../../../style'

export const PayoutHistoryItem = ({ item, ...props }) => {
  const statusList = [
    ['fail', 'Canceled'],
    ['pending', 'In Progress'],
    ['complete', 'Completed']
  ]
  const currentStatus = statusList[+item.status]

  const date = new Date(item.start)

  return (
    <Row className={css(style.history.box)}>
      <Col xs='12' className={css(style.history.innerWrapper)}>
        <Row>
          <Col xs='1'>
            <div
              className={css(
                style.circle.circle,
                style.circle[currentStatus[0]]
              )}
            />
          </Col>
          <Col xs='4'>
            <span className={css(style.history.statusSpan)}>
              {currentStatus[1]}
            </span>
          </Col>
          <Col xs='3'>
            <span className={css(style.history.amountSpan)}>
              {item.amount}
              {props.currency}
            </span>
          </Col>
          <Col xs='4'>
            <span
              className={css(style.history.dateSpan)}
            >{`${date.getDate()}-${date.getMonth() +
              1}-${date.getFullYear()}`}</span>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default PayoutHistoryItem
