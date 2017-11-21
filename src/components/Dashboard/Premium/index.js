import React from 'react'
import { css } from 'aphrodite'
import { Container, Row, Col } from 'reactstrap'
/* eslint-disable no-unused-vars */
import { inject, observer } from 'mobx-react'
/* eslint-enable no-unused-vars */

import style from './style'

import SidebarHeader from '../../partials/SidebarHeader'

import PremiumInfo from './partials/PremiumInfo'
import PaymentHistory from './partials/PaymentHistory'

@inject('premium', 'user')
@observer
export class Premium extends React.Component {
  onBuyPremiumClick (e) {
    e.preventDefault()
    this.props.premium.buy()
  }

  render () {
    return (
      <Container fluid className={css(style.main.container)}>
        <Row>
          <SidebarHeader
            title='Go Premium!'
            paddingBottom
            testStyle={{ color: `#4f5bd5` }}
            md
          />
        </Row>
        <Row className={`${css(style.main.mainRow)}`}>
          <Col xs='12' className={css(style.info.wrapper)}>
            <PremiumInfo
              onClick={this.onBuyPremiumClick.bind(this)}
              currency={this.props.user.dashboard.data.currency}
            />
          </Col>
          <Col xs='12' className={css(style.history.wrapper)}>
            <PaymentHistory />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Premium
