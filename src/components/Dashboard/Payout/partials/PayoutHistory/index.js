import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'

import style from '../../style'

import ScrollArea from '../../../../partials/ScrollArea'

import PayoutHistoryTitles from './partials/titleRow.js'
import PayoutHistoryItem from './partials/listItem.js'

export const PayoutHistory = props => (
  <Row className={css(style.history.mainRow)}>
    <Col xs="12" className={css(style.history.titleWrapper)}>
      <PayoutHistoryTitles />
    </Col>
    <Col xs="12" className={css(style.history.contentWrapper)}>
      <ScrollArea 
        style={{ width: '100%', height: `100%` }}
        autoHide={true}
        autoHideTimeout={1000}
        autoHideDuration={200}
      >
        <PayoutHistoryItem key={1} />
        <PayoutHistoryItem key={2} />
      </ScrollArea>
    </Col>
  </Row>
)

export default PayoutHistory
