import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'

import style from '../../../style'

export const ItemDescriptionRow = props => (
  <Row>
    <Col xs='12'>
      <span className={css(style.uploaded.labelSpan)}>status</span>
    </Col>
    <Col xs='12'>
      <span className={css(style.uploaded.labelSpan)}>name</span>
    </Col>
    <Col xs='12'>
      <span className={css(style.uploaded.labelSpan)}>views</span>
    </Col>
    <Col xs='12'>
      <span className={css(style.uploaded.labelSpan)}>price</span>
    </Col>
    <Col xs='12'>
      <span className={css(style.uploaded.labelSpan)}>earn</span>
    </Col>
    <Col xs='12'>
      <span className={css(style.uploaded.labelSpan)}>end</span>
    </Col>
    <Col xs='12'>
      <span className={css(style.uploaded.labelSpan)}>actions</span>
    </Col>
  </Row>
)

export default ItemDescriptionRow
