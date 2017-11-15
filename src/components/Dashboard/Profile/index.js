import React from 'react'
import { css } from 'aphrodite'
import { Container, Row } from 'reactstrap'
/* eslint-disable no-unused-vars */
import { inject, observer } from 'mobx-react'
/* eslint-enable no-unused-vars */

import style from './style'

import SidebarHeader from '../../partials/SidebarHeader'
import SettingsForm from './partials/SettingsForm'
import Error from './partials/Error'

@inject('user')
@observer
export class Profile extends React.Component {
  constructor (props) {
    super(props)
    const state = {}
    this.state = state
  }

  onTextChange (e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  onFormSubmit (e) {
    e.preventDefault()

    const newData = {
      ...this.props.user.profile.data,
      ...this.state
    }

    this.props.user.postProfile(newData)
  }

  render () {
    return (
      <Container fluid className={css(style.main.container)}>
        <Row>
          <SidebarHeader title='Profile' paddingBottom md />
        </Row>
        <Error error={this.props.user.profile.response.error} />
        <SettingsForm
          profile={this.props.user.profile.data}
          onTextChange={this.onTextChange.bind(this)}
          onFormSubmit={this.onFormSubmit.bind(this)}
        />
      </Container>
    )
  }
}

export default Profile
