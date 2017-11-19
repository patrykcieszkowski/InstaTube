import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'

import style from '../../../style'

export const PayoutHistoryTitles = props => (
  <Row>
    <Col xs='6'>
      <span className={css(style.history.titleSpan)}>Nickname</span>
    </Col>
    <Col xs='6'>
      <span className={css(style.history.titleSpan)}>Site</span>
    </Col>
  </Row>
)

export default PayoutHistoryTitles
