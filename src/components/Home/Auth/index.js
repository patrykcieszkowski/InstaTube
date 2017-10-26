import React from 'react'
import { css } from 'aphrodite'
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap'

import LoginForm from './partials/LoginForm'
import RegisterForm from './partials/RegisterForm'
import style from './style'

export class Auth extends React.Component {
  render() {
    return (
      <Container fluid>
        <LoginForm />
        <RegisterForm />
      </Container>
    )
  }
}

export default Auth
