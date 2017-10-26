import React from 'react'
import { css } from 'aphrodite'
import { Link } from 'react-router-dom'
import { Form, FormGroup, Input, Button } from 'reactstrap'

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
    <FormGroup className={css(style.form.group)}>
      <Button
        className={`d-flex justify-content-center align-items-center ${css(
          style.buttons.button,
          style.buttons.facebook
        )}`}
      >
        <i
          className={`la la-facebook-official ${css(style.buttons.icon)}`}
          aria-hidden="true"
          title="facebook"
        />
        Login with facebook
      </Button>
    </FormGroup>

    <FormGroup className={css(style.form.group)}>
      <Button
        className={`d-flex justify-content-center align-items-center ${css(
          style.buttons.button,
          style.buttons.instagram
        )}`}
      >
        <i
          className={`la la-instagram ${css(style.buttons.icon)}`}
          aria-hidden="true"
          title="instagram"
        />
        Login with instagram
      </Button>
    </FormGroup>

    <FormGroup className={css(style.form.group)}>
      <Button className={css(style.buttons.button, style.buttons.login)}>
        Sign In
      </Button>
    </FormGroup>
    <FormGroup>
      <Link to={`/nav/auth/remind`} className={css(style.links.remind)}>
        Forgot password?
      </Link>
    </FormGroup>
  </Form>
)

export default LoginForm
