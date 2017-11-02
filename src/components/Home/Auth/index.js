import React from 'react'
import { css } from 'aphrodite'
import { Container, Row, Col } from 'reactstrap'
import { Scrollbars } from 'react-custom-scrollbars'

import style from './style'

import SignupInfo from '../partials/SignupInfo'

import LoginForm from './partials/LoginForm'
import RegisterForm from './partials/RegisterForm'

export class Auth extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row className={css(style.grid.wrapper)}>
          <Col xl="5" className={`d-none d-xl-flex align-items-center`}>
            <Row className={``}>
              <SignupInfo />
            </Row>
          </Col>
          <Col>
            <Scrollbars
              style={{ width: '100%', height: `100%` }}
              renderView={props => <Row {...props} />}
            >
              <Col xs="12" xl="6">
                <LoginForm />
              </Col>
              <Col xs="12" xl="6">
                <RegisterForm />
              </Col>
            </Scrollbars>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Auth
