import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'

import Container from '../../partials/Container'
import UploadForm from '../../partials/UploadForm'
import SignupInfo from '../partials/SignupInfo'

import style from './style'

export class Home extends React.Component {
  componentWillMount () {
    document.title = this.props.homeTitle
  }

  render () {
    return (
      <Container
        fluid
        fullHeight
        minHeight
        className={`d-md-flex align-items-md-center`}
      >
        <Row className={css(style.grid.mainRow)}>
          <Col
            xs='12'
            xl='auto'
            className={` d-md-flex align-items-md-center `}
          >
            <Row>
              <Col className={css(style.upload.box)}>
                <UploadForm />
              </Col>
            </Row>
          </Col>
          <Col xs='12' xl='auto' className={css(style.signup.box)}>
            <Row className={css(style.signup.wrapper)}>
              <SignupInfo />
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Home
