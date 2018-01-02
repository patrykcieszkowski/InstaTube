import React from 'react'
import { css } from 'aphrodite'
import { Form, FormGroup, Input, Button } from 'reactstrap'

import style from '../style'

export const ResetPasswordForm = props => (
  <Form className={css(style.form.form)} onSubmit={props.onFormSubmit}>
    <FormGroup className={css(style.form.group)}>
      <Input
        placeholder="Password"
        type="password"
        className={css(style.inputs.input)}
        name={`password`}
        onChange={props.onTextChange}
      />
    </FormGroup>
    <FormGroup className={css(style.form.group)}>
      <Input
        placeholder="Confirm Password"
        type="password"
        className={css(style.inputs.input)}
        name={`confirm`}
        onChange={props.onTextChange}
      />
    </FormGroup>

    <FormGroup className={css(style.form.group)}>
      <Button
        type="submit"
        className={css(style.buttons.button, style.buttons.remind)}
      >
        Reset
      </Button>
    </FormGroup>
  </Form>
)

export default ResetPasswordForm
