import React from 'react'
import { css } from 'aphrodite'
import { Container, Row, Col } from 'reactstrap'

import PayoutHistory from './partials/PayoutHistory'
import Withdraw from './partials/Withdraw'

import style from './style'

export class Payout extends React.Component {
  render() {
    return (
      <Container fluid className={css(style.grid.container)}>
        <Row className={css(style.grid.mainRow)}>
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
