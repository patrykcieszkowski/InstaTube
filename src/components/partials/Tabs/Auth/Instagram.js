import React from 'react'
import { css } from 'aphrodite'
import { Container, Row, Col } from 'reactstrap'
import { Redirect } from 'react-router-dom'
/* eslint-disable no-unused-vars */
import { inject, observer } from 'mobx-react'
/* eslint-enable no-unused-vars */

import style from './style'
import utils from '../../../../utils'

import SidebarHeader from '../../SidebarHeader'
import Column from '../../Col'
import Alert from '../../FormAlert'
import RegisterInstagramForm from './partials/RegisterInstagramForm'

@inject('auth')
@observer
export class InstagramAuth extends React.Component {
  constructor () {
    super()
    const state = {
      register: {
        error: null,
        rules: false
      }
    }
    this.state = state
  }

  componentWillMount () {
    document.title = `Instagram - ${this.props.homeTitle}`

    const hashParams = utils.parseHashParams(window.location.hash.substr(1))

    this.setState({
      ...this.state,
      hashParams
    })

    if (hashParams.success) {
      this.props.auth.extend()
    }
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
      token: this.state.hashParams.instagram_token,
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
      register: {
        ...this.state.register,
        error: null
      }
    })
  }

  render () {
    if (!this.state.hashParams.instagram_token) {
      return <Redirect to='/' />
    }

    const registerResponse = this.props.auth.response.register
    const registerAlert = registerResponse ? registerResponse : {
      success: false,
      alert: 'danger',
      content: this.state.register.error
    }

    return (
      <Container fluid>
        <Row className={css(style.main.wrapper)}>
          <RenderSider {...this.props} />
          <Col className={css(style.content.wrapper)}>
            <Row>
              <Column
                xs='10'
                xl='10'
                xxl='6'
                xxxl='5'
                xxxxl='5'
                className={css(style.content.colWrapper)}
              >
                <Row>
                  <SidebarHeader
                    title={`Instagram Signup`}
                    paddingTop
                    paddingBottom
                    className={`d-none d-xl-block`}
                  />
                  <SidebarHeader
                    title={`Instagram Signup`}
                    className={`d-xl-none`}
                  />
                </Row>
                <RenderAlert
                  {...registerAlert}
                  onClick={this.onAlertClick.bind(this)}
                />
                <RegisterInstagramForm
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

export default InstagramAuth
