import React from 'react'
import { css } from 'aphrodite'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

import UploadForm from '../../partials/UploadForm'

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
          <Col xs="12">
            <h1 className={css(style.signup.h1)}>Why should you register?</h1>
          </Col>
          <Col xs="12">
            <ul className={css(style.signup.list)}>
              <li className={css(style.signup.listItem)}>Manage uploads</li>
              <li className={css(style.signup.listItem)}>PPV links</li>
              <li className={css(style.signup.listItem)}>
                Link availability 24h
              </li>
              <li className={css(style.signup.listItem)}>
                More config options
              </li>
            </ul>
          </Col>
          <Col xs="12">
            <Row>
              <Col xs="10">
                <Link to="/nav/auth" className={css(style.signup.signupButton)}>
                  Sign me up for FREE!
                </Link>
              </Col>
            </Row>
            <Row>
              <Col xs="10">
                <span className={css(style.signup.loginSpan)}>
                  Already got an account?
                  <Link to="/nav/auth" className={css(style.signup.loginLink)}>
                    Login!
                  </Link>
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Home
