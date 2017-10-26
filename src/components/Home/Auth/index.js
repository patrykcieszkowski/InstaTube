import React from 'react'
import { Container } from 'reactstrap'

import LoginForm from './partials/LoginForm'
import RegisterForm from './partials/RegisterForm'

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
