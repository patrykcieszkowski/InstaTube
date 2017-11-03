import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'

import style from '../../../style'

export const UploadedListTitles = props => (
  <Row>
    <Col xl="1" />
    <Col xl="3">
      <span className={css(style.uploaded.titleSpan)}>Name</span>
    </Col>
    <Col xl="">
      <span className={css(style.uploaded.titleSpan)}>Views</span>
    </Col>
    <Col xl="">
      <span className={css(style.uploaded.titleSpan)}>Price</span>
    </Col>
    <Col xl="">
      <span className={css(style.uploaded.titleSpan)}>Earn</span>
    </Col>
    <Col xl="3">
      <span className={css(style.uploaded.titleSpan)}>Action/Expire</span>
    </Col>
  </Row>
)

export default UploadedListTitles
