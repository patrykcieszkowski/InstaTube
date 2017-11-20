import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'
/* eslint-disable no-user-vars */
import { inject, observer } from 'mobx-react'
/* eslint-enable no-user-vars */

import style from '../style'

import ScrollArea from '../../../partials/ScrollArea'

@inject('premium')
@observer
class PaymentHistory extends React.Component {
  componentWillMount() {
    this.props.premium.fetch()
  }

  render() {
    return (
      <Row className={`${css(style.main.mainRow)}`}>
        <Col xs="12" className={`${css(style.history.titleWrapper)}`}>
          <h4 className={css(style.history.h4)}>history</h4>
        </Col>
        <Col xs="12" className={`${css(style.history.contentWrapper)}`}>
          <ScrollArea
            style={{ width: '100%', height: `calc(100% - 220px)` }}
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
          >
            {this.props.premium.all
              .slice()
              .map((item, index) => (
                <PaymentHistoryItem item={item} key={index} />
              ))}
          </ScrollArea>
        </Col>
      </Row>
    )
  }
}

export const PaymentHistoryItem = ({ item }) => {
  const statusList = [
    ['fail', 'Canceled'],
    ['pending', 'In Progress'],
    ['complete', 'Completed']
  ]
  const currentStatus = statusList[+item.status]

  const date = new Date(item.end)

  return (
    <Row className={css(style.history.box)}>
      <Col xs="12" className={css(style.history.innerWrapper)}>
        <Row>
          <Col xs="1">
            <div
              className={css(
                style.circle.circle,
                style.circle[currentStatus[0]]
              )}
            />
          </Col>
          <Col xs="4">
            <span className={css(style.history.statusSpan)}>
              {currentStatus[1]}
            </span>
          </Col>
          <Col xs="3">
            <span className={css(style.history.amountSpan)}>
              ${item.amount}
            </span>
          </Col>
          <Col xs="4">
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

export default PaymentHistory
