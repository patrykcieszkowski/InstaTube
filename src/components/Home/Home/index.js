import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'

import Container from '../../partials/Container'
import UploadForm from '../../partials/UploadForm'
import SignupInfo from '../partials/SignupInfo'

import style from './style'

export class Home extends React.Component {
  render() {
    return (
      <Container
        fluid
        fullHeight
        minHeight
        className={`d-md-flex align-items-md-center`}
      >
        <Row className={css(style.grid.mainRow)}>
          <Col xs="12" lg="5" xl="4">
            <Row>
              <Col className={css(style.upload.box)}>
                <UploadForm />
              </Col>
            </Row>
          </Col>
          <Col xs="12" lg="5" xl="4" className={css(style.signup.box)}>
            <Row>
              <SignupInfo />
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Home
