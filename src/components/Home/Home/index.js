import React from 'react'
import { css } from 'aphrodite'
import { Container, Row, Col } from 'reactstrap'

import UploadForm from '../../partials/UploadForm'
import SignupInfo from './partials/SignupInfo'

import style from './style'

export class Home extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row className={css(style.grid.row, style.upload.wrapper)}>
          <Col className={css(style.upload.box)}>
            <UploadForm />
          </Col>
        </Row>
        <Row className={css(style.grid.row, style.signup.box)}>
          <SignupInfo />
        </Row>
      </Container>
    )
  }
}

export default Home
