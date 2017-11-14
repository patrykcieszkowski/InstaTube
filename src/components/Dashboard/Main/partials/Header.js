import React from 'react'
import { css } from 'aphrodite'
import { Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'

import style from '../style'

export const DashboardHeader = (props) => (
  <Col xs="12">
    <Row>
      <Col className={`d-none d-xl-flex`}>
        <span className={css(style.header.welcomeMessage)}>
          We are happy to see you again { `${props.profile.name} ${props.profile.surname}` }
        </span>
      </Col>
      <Col
        className={`d-none d-xl-flex justify-content-center align-items-center`}
      >
        <span className={css(style.header.withdrawMessage)}>
          You can easily withdraw your money with secure payments
        </span>
      </Col>

      <Col className={`d-none d-xl-flex`} xs="3" />

      <Col
        xs="12"
        xl=""
        className={`d-flex justify-content-center align-items-center`}
      >
        <span className={css(style.header.amountSpan)}>${ props.user.total }</span>
      </Col>
      <Col
        xs="12"
        xl=""
        className={`d-flex justify-content-center align-items-center`}
      >
        <Link to="/dashboard/payout" className={css(style.header.button)}>
          Withdraw
        </Link>
      </Col>
    </Row>
  </Col>
)

export default DashboardHeader
