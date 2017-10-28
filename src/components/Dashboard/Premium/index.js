import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import PremiumInfo from './partials/PremiumInfo'
import PaymentHistory from './partials/PaymentHistory'

export class Premium extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs="12">
            <PremiumInfo />
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <PaymentHistory />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Premium
