import React from 'react'
import { css } from 'aphrodite'
import { Form, FormGroup, Input, Button, Row, Col } from 'reactstrap'

import style from '../style'

export const PasswordForm = props => (
  <Form className={css(style.form.form)} onSubmit={props.onFormSubmit}>
    <FormGroup className={css(style.form.group)}>
      <PasswordInputs onTextChange={props.onTextChange} />
    </FormGroup>

    <FormGroup className={css(style.form.group)}>
      <Button className={css(style.buttons.button)}>Save</Button>
    </FormGroup>
  </Form>
)

export const PasswordInputs = props => (
  <Row className={css(style.form.row)}>
    <Col xs='12' className={css(style.labels.wrapper)}>
      <h4 className={css(style.labels.h4)}>password</h4>
    </Col>
    <Col xs='12' className={css(style.inputs.wrapper)}>
      <Input
        placeholder='Password'
        type='password'
        className={css(style.inputs.input)}
        name={`password`}
        onChange={props.onTextChange}
      />
    </Col>
    <Col xs='12' className={css(style.inputs.wrapper)}>
      <Input
        placeholder='Confirm Password'
        type='password'
        className={css(style.inputs.input)}
        name={`confirm`}
        onChange={props.onTextChange}
      />
    </Col>
  </Row>
)

export default PasswordForm
