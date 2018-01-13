import React from 'react'
import { css } from 'aphrodite'
import { Container, Row } from 'reactstrap'

/* eslint-disable no-unused-vars */
import { inject, observer } from 'mobx-react'
/* eslint-enable no-unused-vars */

import style from './style'

import SidebarHeader from '../../partials/SidebarHeader'
import SettingsForm from './partials/SettingsForm'
import AccountForm from './partials/AccountForm'
import PasswordForm from './partials/PasswordForm'
import ScrollArea from '../../partials/ScrollArea'
import Alert from '../../partials/FormAlert'

@inject('user', 'auth', 'alert')
@observer
export class Profile extends React.Component {
  constructor (props) {
    super(props)
    const state = {}
    this.state = state
  }

  componentWillMount () {
    document.title = `${this.props.title} - ${this.props.homeTitle}`
  }

  componentWillUnmount() {
    this.props.user.clearErrors('profile')
    this.props.user.clearErrors('password')
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

  onAccountDeleteSubmit(e) {
    e.preventDefault()

    this.props.alert.setAlert({
      active: true,
      text: `Are you sure you want to delete your account?`,
      success: {
        text: `Yes`,
        onClick: this.onAccountDeleteConfirm.bind(this)
      },
      cancel: {
        text: `No`,
        onClick: () => {}
      }
    })
  }

  onAccountDeleteConfirm() {
    this.props.user.deleteAccount()
      .then((data) => this.props.auth.logout())
      .catch(console.error)
  }

  onAlertClick(e, type) {
    e.preventDefault()
    this.props.user.clearErrors(type)
  }

  render () {
    return (
      <Container fluid className={css(style.main.container)}>
        <Row>
          <SidebarHeader title='Profile' paddingBottom md />
        </Row>
        <Alert 
          {...this.props.user.profile.response}
          onClick={this.onAlertClick.bind(this, 'profile')}
        />
        <SettingsForm
          profile={this.props.user.profile.data}
          onTextChange={this.onTextChange.bind(this, 'settings')}
          onFormSubmit={this.onSettingsFormSubmit.bind(this)}
        />
        <Alert 
          {...this.props.user.password.response}
          onClick={this.onAlertClick.bind(this, 'password')}
        />
        <PasswordForm
          onTextChange={this.onTextChange.bind(this, 'password')}
          onFormSubmit={this.onPasswordFormSubmit.bind(this)}
        />
        <AccountForm 
          onFormSubmit={this.onAccountDeleteSubmit.bind(this)}
        />
      </Container>
    )
  }
}

export default Profile
