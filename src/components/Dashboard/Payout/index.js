import React from 'react'
import { css } from 'aphrodite'
import { Container, Row, Col } from 'reactstrap'

import style from './style'

import SidebarHeader from '../../partials/SidebarHeader'
import PayoutHistory from './partials/PayoutHistory'
import Withdraw from './partials/Withdraw'

export class Payout extends React.Component {
  render() {
    return (
      <Container fluid className={css(style.main.container)}>
        <Row>
          <SidebarHeader title="Payout History" paddingBottom md={true} />
        </Row>
        <Row className={css(style.main.mainRow)}>
          <Col xs="12" className={css(style.history.wrapper)}>
            <PayoutHistory />
          </Col>
          <Col xs="12" className={css(style.withdraw.wrapper)}>
            <Withdraw />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Payout
