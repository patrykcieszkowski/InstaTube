/* global FB */
import React from 'react'
import { css } from 'aphrodite'
import { Container, Row, Col } from 'reactstrap'
/* eslint-disable no-unused-vars */
import { inject, observer } from 'mobx-react'
/* eslint-enable no-unused-vars */

import style from './style'

import Column from '../../Col'

import SidebarHeader from '../../SidebarHeader'
import ScrollArea from '../../ScrollArea'
import LoginForm from './partials/LoginForm'
import RegisterForm from './partials/RegisterForm'

@inject('auth')
@observer
export class Auth extends React.Component {
  constructor (props) {
    super(props)
    const state = {
      login: {
        error: null
      },
      register: {
        error: null
      }
    }
    this.state = state
  }

  onTextChange (type, e) {
    this.setState({
      ...this.state,
      [type]: {
        ...(this.state[type] || {}),
        [e.target.name]: e.target.value
      }
    })
  }

  onLoginFormSubmit (e) {
    e.preventDefault()

    console.log(this.state.login)

    if (!this.state.login.email || !this.state.login.password) {
      this.setState({
        ...this.state,
        login: {
          ...(this.state.login || {}),
          error: `All fields are required`
        }
      })

      return
    }

    this.props.auth.login({
      email: this.state.login.email,
      passowrd: this.state.login.passowrd
    })
  }

  onFacebookLogin (e) {
    e.preventDefault()

    FB.login(res => {
      this.props.auth.setAuthenticationStatus(
        'facebook',
        res.authResponse.accessToken
      )
      this.props.auth.validateFacebookToken()
    })
  }

  onInstagramLogin (e) {
    e.preventDefault()
    this.props.auth.signInWithInstagram(window.location.href)
  }

  onRegisterFormSubmit (e) {
    e.preventDefault()

    if (
      !this.state.register.email ||
      !this.state.register.password ||
      !this.state.register.confirm_password
    ) {
      this.setState({
        ...this.state,
        register: {
          ...(this.state.register || {}),
          error: `All fields are required`
        }
      })

      return
    }

    this.props.auth.register({
      email: this.state.register.email,
      passowrd: this.state.register.passowrd,
      confirm_password: this.state.register.confirm_password
    })
  }

  render () {
    return (
      <Container fluid>
        <Row className={css(style.main.wrapper)}>
          <RenderSider {...this.props} />
          <Col className={css(style.content.wrapper)}>
            <ScrollArea
              style={{ width: '100%', height: `100%` }}
              renderClassName='row'
            >
              <Column
                xs='12'
                xl='12'
                xxl='6'
                xxxl='5'
                xxxxl='5'
                className={css(style.content.colWrapper)}
              >
                <Row>
                  <SidebarHeader title={`Login`} paddingTop paddingBottom />
                </Row>
                <LoginForm
                  onFacebookLogin={this.onFacebookLogin.bind(this)}
                  onInstagramLogin={this.onInstagramLogin.bind(this)}
                  onTextChange={this.onTextChange.bind(this, 'login')}
                  onSubmit={this.onLoginFormSubmit.bind(this)}
                />
              </Column>
              <Column
                xs='12'
                xl='12'
                xxl='6'
                xxxl='5'
                xxxxl='5'
                className={css(style.content.colWrapper)}
              >
                <Row>
                  <SidebarHeader
                    title={`Register`}
                    paddingTop
                    paddingBottom
                    className={`d-none d-xl-block`}
                  />
                  <SidebarHeader title={`Register`} className={`d-xl-none`} />
                </Row>
                <RegisterForm
                  onTextChange={this.onTextChange.bind(this, 'register')}
                  onSubmit={this.onRegisterFormSubmit.bind(this)}
                />
              </Column>
            </ScrollArea>
          </Col>
        </Row>
      </Container>
    )
  }
}

const RenderSider = props => {
  if (!props.xl) {
    return null
  }

  return (
    <Column
      xl='auto'
      xxxxl='3'
      className={`d-none d-xl-flex ${css(style.sider.wrapper)}`}
    >
      <Row className={`${css(style.sider.box)}`} />
    </Column>
  )
}

export default Auth
