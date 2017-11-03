import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'

import style from '../../../style'

export const UploadedListTitles = props => (
  <Row>
    <Col xl="1" />
    <Col xl="">
      <span className={css(style.uploaded.titleBlockSpan)}>Name</span>
    </Col>
    <Col xl="">
      <span className={css(style.uploaded.titleBlockSpan)}>Views</span>
    </Col>
    <Col xl="">
      <span className={css(style.uploaded.titleBlockSpan)}>Price</span>
    </Col>
    <Col xl="">
      <span className={css(style.uploaded.titleBlockSpan)}>Earn</span>
    </Col>
    <Col xl="3">
      <span className={css(style.uploaded.titleBlockSpan)}>Action/Expire</span>
    </Col>
  </Row>
)

export default UploadedListTitles
