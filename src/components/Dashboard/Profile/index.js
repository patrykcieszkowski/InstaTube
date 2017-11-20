import React from 'react'
import { css } from 'aphrodite'
import { Container, Row } from 'reactstrap'
/* eslint-disable no-unused-vars */
import { inject, observer } from 'mobx-react'
/* eslint-enable no-unused-vars */

import style from './style'

import SidebarHeader from '../../partials/SidebarHeader'
import SettingsForm from './partials/SettingsForm'
import PasswordForm from './partials/PasswordForm'
import ScrollArea from '../../partials/ScrollArea'
import Alert from '../../partials/FormAlert'

@inject('user')
@observer
export class Profile extends React.Component {
  constructor (props) {
    super(props)
    const state = {}
    this.state = state
  }

  onTextChange (type, e) {
    this.setState({
      ...this.state,
      [type]: {
        ...this.state[type],
        [e.target.name]: e.target.value
      }
    })
  }

  onSettingsFormSubmit (e) {
    e.preventDefault()

    const newData = {
      ...this.props.user.profile.data,
      ...this.state.settings
    }

    this.props.user.postProfile(newData)
  }

  onPasswordFormSubmit (e) {
    e.preventDefault()

    const newData = {
      ...this.state.password
    }

    this.props.user.postPassword(newData)
  }

  render () {
    return (
      <Container fluid className={css(style.main.container)}>
        <Row>
          <SidebarHeader title='Profile' paddingBottom md />
        </Row>
        <ScrollArea
          style={{
            width: `100%`,
            height: `calc(100% - 80px)`,
            overflowX: `hidden`
          }}
        >
          <Alert {...this.props.user.profile.response} />
          <SettingsForm
            profile={this.props.user.profile.data}
            onTextChange={this.onTextChange.bind(this, 'settings')}
            onFormSubmit={this.onSettingsFormSubmit.bind(this)}
          />
          <Alert {...this.props.user.password.response} />
          <PasswordForm
            onTextChange={this.onTextChange.bind(this, 'password')}
            onFormSubmit={this.onPasswordFormSubmit.bind(this)}
          />
        </ScrollArea>
      </Container>
    )
  }
}

export default Profile
