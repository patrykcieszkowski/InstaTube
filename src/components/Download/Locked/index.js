import React from 'react'
/* eslint-disable no-unused-vars */
import { inject, observer } from 'mobx-react'
/* eslint-enable no-unused-vars */

import LockedComponent from '../partials/Locked'

@inject('media', 'user', 'auth', 'payment')
@observer
export class Locked extends React.Component {
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
      ppv: false
    }
    this.state = state
  }

  onPPVSubmit (e) {
    e.preventDefault()
    this.setState({
      ...this.state,
      ppv: true
    })
  }

  onPPIClick (e) {
    e.preventDefault()
    const { instagram } = this.props.media.media
    window.location.href = `https://api.instagram.com/oauth/authorize/?client_id=${instagram.apikey}&redirect_uri=${instagram.url}&response_type=code&scope=public_content+follower_list`
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
      type: 2,
      hash: this.props.match.params.mediaId
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

  render () {
    return (
      <LockedComponent
        media={this.props.media.media || {}}
        PPVerror={this.props.media.ppv.error || {}}
        onPPVSubmit={this.onPPVSubmit.bind(this)}
        onPPIClick={this.onPPIClick.bind(this)}
        onPaymentFormSubmit={this.onPaymentFormSubmit.bind(this)}
        onRulesClick={this.onRulesClick.bind(this)}
        onTextChange={this.onTextChange.bind(this)}
        payment={this.props.media.payment}
        state={this.state}
      />
    )
  }
}

export default Locked
