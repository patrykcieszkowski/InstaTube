import React from 'react'
import { css } from 'aphrodite'
import { Container, Row, Col } from 'reactstrap'
/* eslint-disable no-unused-vars */
import { inject, observer } from 'mobx-react'
/* eslint-enable no-unused-vars */

import utils from '../../../../utils'

import Error from './partials/Error'
import style from './style'
import Column from '../../Col'
import SidebarHeader from '../../SidebarHeader'
import ResetPasswordForm from './partials/ResetPasswordForm'

@inject('auth')
@observer
export class Reset extends React.Component {
  constructor (props) {
    super(props)
    const state = {
      error: null
    }
    this.state = state
  }

  componentWillMount () {
    const hashParams = utils.parseHashParams(window.location.hash.substr(1))

    this.setState({
      ...this.state,
      hashParams
    })

    if (!hashParams.token) {
      window.location.href = '/auth/remind'      
    }
  }

  onTextChange (e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  onFormSubmit (e) {
    e.preventDefault()

    if (!this.state.password || !this.state.confirm) {
      this.setState({
        ...this.state,
        error: `All fields are required`
      })

      return
    }

    this.props.auth.reset({
      password: this.state.password,
      confirm: this.state.confirm,
      token: this.state.hashParams.token
    })
  }

  render () {
    const resetResponse = this.props.auth.response.recovery
    const resetError =
      resetResponse && !resetResponse.success && resetResponse.content
        ? resetResponse.content
        : this.state.error

    return (
      <Container fluid>
        <Row className={css(style.main.wrapper)}>
          <Column
            xl='auto'
            xxxxl='3'
            className={`d-none d-xl-flex align-items-start ${css(
              style.sider.wrapper
            )}`}
          >
            <Row className={css(style.sider.box)} />
          </Column>
          <Col xs='12' xl={6} className={css(style.content.wrapper)}>
            <Row>
              <SidebarHeader title={`Reset Password`} md={false} paddingTop />
            </Row>
            <RenderError error={resetError} />
            <ResetPasswordForm
              onTextChange={this.onTextChange.bind(this)}
              onFormSubmit={this.onFormSubmit.bind(this)}
            />
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

export default Reset