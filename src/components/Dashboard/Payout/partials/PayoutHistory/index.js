import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'
/* eslint-disable no-unused-vars */
import { inject, observer } from 'mobx-react'
/* eslint-disable no-unused-vars */

import style from '../../style'

import ScrollArea from '../../../../partials/ScrollArea'

import PayoutHistoryTitles from './partials/titleRow.js'
import PayoutHistoryItem from './partials/listItem.js'

@inject('payouts')
@observer
class PayoutHistory extends React.Component {
  componentWillMount () {
    this.props.payouts.fetch()
  }

  render () {
    return (
      <Row className={css(style.history.mainRow)}>
        <Col xs='12' className={css(style.history.titleWrapper)}>
          <PayoutHistoryTitles />
        </Col>
        <Col xs='12' className={css(style.history.contentWrapper)}>
          <ScrollArea
            style={{ width: '100%', height: `100%` }}
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
          >
            {this.props.payouts.all
              .slice()
              .map((item, index) => (
                <PayoutHistoryItem item={item} key={index} />
              ))}
          </ScrollArea>
        </Col>
      </Row>
    )
  }
}

export default PayoutHistory
