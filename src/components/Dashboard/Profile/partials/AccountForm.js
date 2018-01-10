import React from 'react'
import { css } from 'aphrodite'
import { Form, FormGroup, Input, Button, Row, Col } from 'reactstrap'

import style from '../style'

export const AccountForm = props => (
  <Form className={css(style.form.form)} onSubmit={props.onFormSubmit}>
    <FormGroup className={css(style.form.group)}>
      <Button className={css(style.buttons.button, style.buttons.delete)}>
        Delete Account
      </Button>
    </FormGroup>
  </Form>
)

export default AccountForm
