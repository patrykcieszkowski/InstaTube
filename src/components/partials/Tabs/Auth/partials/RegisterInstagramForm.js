import React from 'react'
import { css } from 'aphrodite'
import { Form, FormGroup, Input, Button, Col } from 'reactstrap'

import style from '../style'

export const RegisterInstagramForm = props => (
  <Form className={css(style.form.form)} onSubmit={props.onSubmit}>
    <FormGroup className={css(style.form.group)}>
      <Input
        placeholder='E-mail address'
        className={css(style.inputs.input)}
        name={`email`}
        onChange={props.onTextChange}
      />
    </FormGroup>

    <FormGroup className={css(style.form.group)}>
      <Input
        placeholder='Password'
        type='password'
        className={css(style.inputs.input)}
        name={`password`}
        onChange={props.onTextChange}
      />
    </FormGroup>

    <FormGroup className={css(style.form.group)}>
      <Input
        placeholder='Confirm password'
        type='password'
        className={css(style.inputs.input)}
        name={`confirm`}
        onChange={props.onTextChange}
      />
    </FormGroup>

    <FormGroup className={css(style.form.group)}>
      <Col xs='12' xl='6' style={{ padding: 0 }}>
        <Button
          className={css(style.buttons.button, style.buttons.signup)}
          type='submit'
        >
          Sign me up!
        </Button>
      </Col>
    </FormGroup>
  </Form>
)

export default RegisterInstagramForm
