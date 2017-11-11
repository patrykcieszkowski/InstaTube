import React from 'react'
import { css } from 'aphrodite'
import { Container, Row, Col } from 'reactstrap'
/* eslint-disable no-unused-vars */
import { inject, observer } from 'mobx-react'
/* eslint-enable no-unused-vars */

import style from './style'
import Column from '../../Col'
import SidebarHeader from '../../SidebarHeader'
import RemindForm from './partials/RemindForm'

@inject('auth')
@observer
export class Auth extends React.Component {
  constructor (props) {
    super(props)
    const state = {
      error: null
    }
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

    if (!this.state.email) {
      this.setState({
        ...this.state,
        error: `All fields are required`
      })

      return
    }

    this.props.auth.remind({
      email: this.state.email
    })
  }

  render () {
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
              <SidebarHeader title={`Remind Password`} md={false} paddingTop />
            </Row>
            <RemindForm
              onTextChange={this.onTextChange.bind(this)}
              onFormSubmit={this.onFormSubmit.bind(this)}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Auth
