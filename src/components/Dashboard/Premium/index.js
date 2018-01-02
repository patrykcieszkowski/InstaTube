import React from 'react'
import { css } from 'aphrodite'
import { Container, Row, Col } from 'reactstrap'
/* eslint-disable no-unused-vars */
import { inject, observer } from 'mobx-react'
/* eslint-enable no-unused-vars */

import style from './style'

import SidebarHeader from '../../partials/SidebarHeader'
import PaymentBlock from '../../partials/Payment'

import PremiumInfo from './partials/PremiumInfo'
import PaymentHistory from './partials/PaymentHistory'

@inject('premium', 'user', 'payment')
@observer
export class Premium extends React.Component {
  constructor (props) {
    super(props)
    const state = {
      name: '',
      email: '',
      number: '',
      ccv: '',
      mm: '',
      yy: '',
      rules: false,
      buyEnabled: false,
      error: null
    }
    this.state = state
  }

  componentWillMount () {
    document.title = `${this.props.title} - ${this.props.homeTitle}`
  }

  onTextChange (e) {
    if (['mm', 'yy', 'ccv'].includes(e.target.name)) {
      if (e.target.value !== '' && !e.target.value.match(/^\d+$/)) {
        return e.preventDefault()
      }

      if (e.target.name === 'ccv') {
        if (e.target.value.length > 3) {
          return e.preventDefault()
        }
      } else {
        if (e.target.value.length > 2) {
          return e.preventDefault()
        }
      }
    }

    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  onPaymentFormSubmit (e) {
    e.preventDefault()

    if (!this.state.rules) {
      this.setState({
        ...this.state,
        error: `You have to accept the rules!`
      })

      return
    }

    if (
      !this.state.name ||
      !this.state.email ||
      !this.state.number ||
      !this.state.ccv ||
      !this.state.mm ||
      !this.state.yy
    ) {
      this.setState({
        ...this.state,
        error: `All fields are required`
      })
    }

    const newData = {
      name: this.state.name,
      email: this.state.email,
      number: this.state.number,
      ccv: this.state.ccv,
      mm: this.state.mm,
      yy: this.state.yy,
      type: 1
    }

    this.props.payment.payByCard(newData)
  }

  onRulesClick (e) {
    e.preventDefault()
    this.setState({
      ...this.state,
      rules: !this.state.rules
    })
  }

  onBuyPremiumClick (e) {
    e.preventDefault()
    this.setState({
      ...this.state,
      buyEnabled: true
    })
  }

  render () {
    if (this.state.buyEnabled) {
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
            <PaymentBlock
              onPaymentFormSubmit={this.onPaymentFormSubmit.bind(this)}
              onRulesClick={this.onRulesClick.bind(this)}
              onTextChange={this.onTextChange.bind(this)}
              payment={this.props.payment}
              state={this.state}
            />
          </Row>
        </Container>
      )
    }

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
