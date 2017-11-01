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
        <Row>
          <Col xs='12' md='4'>
            <Row>
              <Col className={css(style.upload.box)}>
                <UploadForm />
              </Col>
            </Row>  
          </Col>
          <Col  xs='12' md='4' className={css(style.signup.box)}>
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
