import React from 'react'
import { css } from 'aphrodite'
import { Container, Row, Col } from 'reactstrap'
/* eslint-disable no-unused-vars */
import { inject, observer } from 'mobx-react'
/* eslint-enable no-unused-vars */

import style from './style'

import Column from '../../Col'

import Alert from '../../FormAlert'
import SidebarHeader from '../../SidebarHeader'
import LoginForm from './partials/LoginForm'
import RegisterForm from './partials/RegisterForm'

@inject('auth', 'config')
@observer
export class Auth extends React.Component {
  constructor (props) {
    super(props)
    const state = {
      login: {
        error: null
      },
      register: {
        error: null,
        rules: false
      }
    }
    this.state = state
  }

  componentWillMount () {
    document.title = `${this.props.title} - ${this.props.homeTitle}`
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
      password: this.state.login.password
    })
  }

  onFacebookLogin (e) {
    e.preventDefault()

    console.log(this.props.config.facebook.url)
    if (!this.props.config.facebook) {
      return
    }

    window.location.href = this.props.config.facebook.url
  }

  onInstagramLogin (e) {
    e.preventDefault()
    window.location.href = `https://api.instagram.com/oauth/authorize/?client_id=${this
      .props.config.instagram
      .key}&redirect_uri=${`https://linkstory.com/api/auth/instagram`}&response_type=code&scope=basic+follower_list+relationships+public_content`
  }

  onRegisterFormSubmit (e) {
    e.preventDefault()

    if (!this.state.register.rules) {
      this.setState({
        ...this.state,
        register: {
          ...(this.state.register || {}),
          error: `You have to accept the rules!`
        }
      })

      return
    }

    if (
      !this.state.register.email ||
      !this.state.register.password ||
      !this.state.register.confirm
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
      password: this.state.register.password,
      confirm: this.state.register.confirm
    })
  }

  onRulesClick (e) {
    e.preventDefault()
    this.setState({
      ...this.state,
      register: {
        ...this.state.register,
        rules: !this.state.register.rules
      }
    })
  }

  onAlertClick(e) {
    e.preventDefault()

    this.props.auth.clearErrors()
    this.setState({
      ...this.state,
      login: {
        ...this.state.login,
        error: null
      },
      register: {
        ...this.state.register,
        error: null
      }
    })
  }

  render () {
    const loginResponse = this.props.auth.response.login
    const loginAlert =
      loginResponse ? loginResponse : this.state.login.error
        ? {
          alert: 'danger',
          content: this.state.login.error,
          success: false
        }
        : {}

    const registerResponse = this.props.auth.response.register
    const registerAlert =
      registerResponse ? registerResponse : this.state.register.error
        ? {
          alert: 'danger',
          content: this.state.register.error,
          success: false
        }
        : {}

    return (
      <Container fluid>
        <Row className={css(style.main.wrapper)}>
          <RenderSider {...this.props} />
          <Col className={css(style.content.wrapper)}>
            <Row>
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
                <RenderAlert
                  {...loginAlert}
                  onClick={this.onAlertClick.bind(this)}                  
                />
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
                <RenderAlert 
                  {...registerAlert}
                  onClick={this.onAlertClick.bind(this)}
                />
                <RegisterForm
                  onTextChange={this.onTextChange.bind(this, 'register')}
                  onSubmit={this.onRegisterFormSubmit.bind(this)}
                  onRulesClick={this.onRulesClick.bind(this)}
                  rulesValue={this.state.register.rules}
                />
              </Column>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

const RenderAlert = props => {
  return <Alert {...props} />
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
