import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

import style from './style'

const SignupInfo = () => [
  <Col xs="12" key={0}>
    <h3 className={css(style.signup.h3)}>Why should you register?</h3>
  </Col>,
  <Col xs="12" key={1}>
    <ul className={css(style.signup.list)}>
      <li className={css(style.signup.listItem)}>Manage uploads</li>
      <li className={css(style.signup.listItem)}>PPV links</li>
      <li className={css(style.signup.listItem)}>Link availability 24h</li>
      <li className={css(style.signup.listItem)}>More config options</li>
    </ul>
  </Col>,
  <Col xs="12" key={2}>
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
]

export default SignupInfo
