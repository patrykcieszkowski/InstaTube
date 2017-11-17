import React from 'react'
import { css } from 'aphrodite'
import { Container, Row, Col } from 'reactstrap'
import { Redirect } from 'react-router-dom'
/* eslint-disable no-unused-vars */
import { inject, observer } from 'mobx-react'
/* eslint-enable no-unused-vars */

import style from './style'
import utils from '../../../../utils'

import ScrollArea from '../../ScrollArea'
import SidebarHeader from '../../SidebarHeader'
import Column from '../../Col'
import Error from './partials/Error'
import RegisterInstagramForm from './partials/RegisterInstagramForm'

@inject('auth')
@observer
export class InstagramAuth extends React.Component {
  constructor () {
    super()
    const state = {
      register: {
        error: null
      }
    }
    this.state = state
  }

  componentWillMount () {
    const hashParams = utils.parseHashParams(window.location.hash.substr(1))

    this.setState({
      ...this.state,
      hashParams
    })
    console.log(hashParams)
    if (hashParams.access_token && hashParams.success) {
      this.props.auth.setAuthenticationStatus('local', true)
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
      access_token: this.state.hashParams.access_token,
      email: this.state.register.email,
      password: this.state.register.password,
      confirm_password: this.state.register.confirm_password
    })
  }

  render () {
    if (!this.state.hashParams.access_token) {
      return <Redirect to='/' />
    }

    const registerResponse = this.props.auth.response.register
    const registerError =
      registerResponse && registerResponse.type === 'error'
        ? registerResponse.data.content
        : this.state.register.error

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
                <RenderError error={registerError} />
                <RegisterInstagramForm
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

const RenderError = props => {
  if (!props.error) {
    return null
  }

  return <Error error={props.error} />
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
