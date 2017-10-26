import React from 'react'
import { Container } from 'reactstrap'

import RemindForm from './partials/RemindForm'

export class Auth extends React.Component {
  render() {
    return (
      <Container fluid>
        <RemindForm />
      </Container>
    )
  }
}

export default Auth
