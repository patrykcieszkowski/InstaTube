import React from 'react'
import { css } from 'aphrodite'
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap'

import RemindForm from './partials/RemindForm'
import style from './style'

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
