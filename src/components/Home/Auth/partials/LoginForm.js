import React from 'react'
import { css } from 'aphrodite'
import { Link } from 'react-router-dom'
import { Form, FormGroup, Input, Button, Row, Col } from 'reactstrap'

import style from '../style'

export const LoginForm = props => (
  <Form className={css(style.form.form)}>
    <FormGroup className={css(style.form.group)}>
      <Input placeholder="E-mail address" className={css(style.inputs.input)} />
    </FormGroup>
    <FormGroup className={css(style.form.group)}>
      <Input
        placeholder="password"
        type="password"
        className={css(style.inputs.input)}
      />
    </FormGroup>

    <FormGroup className={`${css(style.form.group)} d-flex d-xl-none`}>
      <Button
        className={`d-flex justify-content-center align-items-center ${css(
          style.buttons.button,
          style.buttons.facebook
        )}`}
      >
        <span className={`justify-content-center align-items-center`}>
          <i
            className={`la la-facebook-official ${css(style.buttons.icon)}`}
            aria-hidden="true"
            title="facebook"
          />
          Login with facebook
        </span>
      </Button>
    </FormGroup>

    <FormGroup className={`${css(style.form.group)} d-flex d-xl-none`}>
      <Button
        className={`d-flex justify-content-center align-items-center ${css(
          style.buttons.button,
          style.buttons.instagram
        )}`}
      >
        <span className={`justify-content-center align-items-center`}>
          <i
            className={`la la-instagram ${css(style.buttons.icon)}`}
            aria-hidden="true"
            title="instagram"
          />
          Login with instagram
        </span>
      </Button>
    </FormGroup>

    <FormGroup className={`${css(style.form.group)} d-none d-xl-block`}>
      <Row>
        <Col xs="12" xl="6" className={css(style.buttons.facebookWrapper)}>
          <Button
            className={`d-flex justify-content-center align-items-center ${css(
              style.buttons.button,
              style.buttons.facebook
            )}`}
          >
            <span
              className={`${css(
                style.grid.d1800None
              )} justify-content-center align-items-center`}
            >
              <i
                className={`la la-facebook-official ${css(style.buttons.icon)}`}
                aria-hidden="true"
                title="facebook"
              />
              facebook
            </span>
            <span
              className={`${css(
                style.grid.d1800
              )} justify-content-center align-items-center`}
            >
              <i
                className={`la la-facebook-official ${css(style.buttons.icon)}`}
                aria-hidden="true"
                title="facebook"
              />
              Login with facebook
            </span>
          </Button>
        </Col>
        <Col xs="12" xl="6" className={css(style.buttons.instagramWrapper)}>
          <Button
            className={`d-flex justify-content-center align-items-center ${css(
              style.buttons.button,
              style.buttons.instagram
            )}`}
          >
            <span
              className={`${css(
                style.grid.d1800None
              )} justify-content-center align-items-center`}
            >
              <i
                className={`la la-instagram ${css(style.buttons.icon)}`}
                aria-hidden="true"
                title="instagram"
              />
              instagram
            </span>
            <span
              className={`${css(
                style.grid.d1800
              )} justify-content-center align-items-center`}
            >
              <i
                className={`la la-instagram ${css(style.buttons.icon)}`}
                aria-hidden="true"
                title="instagram"
              />
              Login with instagram
            </span>
          </Button>
        </Col>
      </Row>
    </FormGroup>

    <FormGroup className={css(style.form.group)}>
      <Row>
        <Col xs="12" xl="6">
          <Button className={css(style.buttons.button, style.buttons.login)}>
            Sign In
          </Button>
        </Col>
        <Col
          xs="12"
          xl="6"
          className={`d-flex justify-content-lg-center align-items-lg-center ${css(
            style.login.remindWrapper
          )}`}
        >
          <Link to={`/nav/auth/remind`} className={css(style.links.remind)}>
            Forgot password?
          </Link>
        </Col>
      </Row>
    </FormGroup>
  </Form>
)

export default LoginForm
