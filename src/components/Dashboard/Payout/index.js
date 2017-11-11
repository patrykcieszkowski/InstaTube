import React from 'react'
import { css } from 'aphrodite'
import { Container, Row, Col } from 'reactstrap'
/* eslint-disable no-unused-vars */
import { inject, observer } from 'mobx-react'
/* eslint-enable no-unused-vars */

import style from './style'

import SidebarHeader from '../../partials/SidebarHeader'
import PayoutHistory from './partials/PayoutHistory'
import Withdraw from './partials/Withdraw'

@inject('user')
@observer
export class Payout extends React.Component {
  render () {
    return (
      <Container fluid className={css(style.main.container)}>
        <Row>
          <SidebarHeader title='Payout History' paddingBottom md />
        </Row>
        <Row className={css(style.main.mainRow)}>
          <Col xs='12' className={css(style.history.wrapper)}>
            <PayoutHistory />
          </Col>
          <Col xs='12' className={css(style.withdraw.wrapper)}>
            <Withdraw dashboard={this.props.user.dashboard} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Payout
