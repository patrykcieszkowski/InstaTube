import React from 'react'
/* eslint-disable no-unused-vars */
import { inject, observer } from 'mobx-react'
/* eslint-enable no-unused-vars */

import LockedComponent from '../partials/Locked'

@inject('media', 'user', 'auth')
@observer
export class Locked extends React.Component {
  constructor (props) {
    super(props)
    const state = {}
    state.ppv = {}
    this.state = state
  }

  onPPVSubmit (e) {
    e.preventDefault()

    if (!this.props.auth.auth.local) {
      return (window.location.href = '/auth')
    }

    const data = {
      email: this.props.user.dashboard.email,
      hash: this.props.match.params.mediaId,
      type: this.props.media.media.amount
    }

    this.props.media.pay(data)
  }

  onPPIClick (e) {
    e.preventDefault()

    if (!this.props.auth.auth.local) {
      return (window.location.href = '/auth')
    }

    const { instagram } = this.props.media.media
    window.location.href = `https://api.instagram.com/oauth/authorize/?client_id=${instagram.apikey}&redirect_uri=${instagram.url}&response_type=code&scope=public_content+follower_list`
  }

  render () {
    return (
      <LockedComponent
        media={this.props.media.media || {}}
        onPPVSubmit={this.onPPVSubmit.bind(this)}
        onPPIClick={this.onPPIClick.bind(this)}
      />
    )
  }
}

export default Locked
