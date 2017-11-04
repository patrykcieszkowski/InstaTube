import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

import style from './style'

const SignupInfo = () => [
  <Col xs="12" key={0}>
    <h3 className={css(style.signup.h3)}>Earn money!</h3>
  </Col>,
  <Col xs="12" key={1}>
    <p className={css(style.signup.paragraph)}>Get more out of InstaTube, get money!</p>
  </Col>,
  <Col xs="12" key={2}>
    <Row>
      <Col xs="10">
        <Link to="/nav/auth" className={css(style.signup.signupButton)}>
          Sign me up!
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
]

export default SignupInfo
