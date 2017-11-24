import React from 'react'
import { css } from 'aphrodite'
import { Link } from 'react-router-dom'
import { Form, FormGroup, Input, Button, Row, Col } from 'reactstrap'

import style from '../style'

export const LoginForm = props => (
  <Form className={css(style.form.form)} onSubmit={props.onSubmit}>
    <FormGroup className={css(style.form.group)}>
      <Input
        placeholder="E-mail address"
        className={css(style.inputs.input)}
        name={`email`}
        onChange={props.onTextChange}
      />
    </FormGroup>
    <FormGroup className={css(style.form.group)}>
      <Input
        placeholder="Password"
        type="password"
        className={css(style.inputs.input)}
        name={`password`}
        onChange={props.onTextChange}
      />
    </FormGroup>

    <FormGroup className={`${css(style.form.group)} d-flex d-xl-none`}>
      <RenderFacebookButton onFacebookLogin={props.onFacebookLogin} />
    </FormGroup>

    <FormGroup className={`${css(style.form.group)} d-flex d-xl-none`}>
      <RenderInstagramButton onInstagramLogin={props.onInstagramLogin} />
    </FormGroup>

    <FormGroup className={`${css(style.form.group)} d-none d-xl-block`}>
      <Row>
        <Col xs="12" className={css(style.buttons.instagramWrapper)}>
          <RenderInstagramButton onInstagramLogin={props.onInstagramLogin} />
        </Col>
      </Row>
    </FormGroup>

    <FormGroup className={css(style.form.group)}>
      <Row>
        <Col xs="12" xl="6">
          <Button
            type="submit"
            className={css(style.buttons.button, style.buttons.login)}
          >
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
          <Link to={`/auth/remind`} className={css(style.links.remind)}>
            Forgot password?
          </Link>
        </Col>
      </Row>
    </FormGroup>
  </Form>
)

const RenderFacebookButton = props => {
  return null

  return (
    <Button
      onClick={props.onFacebookLogin}
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
  )
}

const RenderInstagramButton = props => (
  <Button
    onClick={props.onInstagramLogin}
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
)

export default LoginForm
