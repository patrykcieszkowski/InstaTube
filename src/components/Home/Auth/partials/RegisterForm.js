import React from 'react'
import { css } from 'aphrodite'
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap'

import style from '../style'

export const RegisterForm = props => (
  <Form className={css(style.form.form)}>
    <FormGroup className={css(style.form.group)}>
      <Input placeholder="E-mail address" className={css(style.inputs.input)} />
    </FormGroup>

    <FormGroup className={css(style.form.group)}>
      <Input
        placeholder="password"
        type="Password"
        className={css(style.inputs.input)}
      />
    </FormGroup>

    <FormGroup className={css(style.form.group)}>
      <Input
        placeholder="Confirm password"
        type="password"
        className={css(style.inputs.input)}
      />
    </FormGroup>

    <FormGroup className={css(style.form.group)}>
      <Button className={css(style.buttons.button, style.buttons.signup)}>
        Sign me up!
      </Button>
    </FormGroup>
  </Form>
)

export default RegisterForm
