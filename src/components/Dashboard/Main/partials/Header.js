import React from 'react'
import { css } from 'aphrodite'
import { Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'

import style from '../style'

export const DashboardHeader = () => (
  <Col xs="12">
    <Row>
      <Col xs="12">
        <span className={css(style.header.amountSpan)}>$1231,00</span>
      </Col>
      <Col xs="12">
        <Link to="#" className={css(style.header.button)}>
          Withdraw
        </Link>
      </Col>
    </Row>
  </Col>
)

export default DashboardHeader
