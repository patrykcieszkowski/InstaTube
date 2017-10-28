import React from 'react'
import { css } from 'aphrodite'
import { Form, FormGroup, Input, Button, Row, Col } from 'reactstrap'

import style from '../style'

export const SettingsForm = props => (
  <Form className={css(style.form.form)}>
    <FormGroup className={css(style.form.group)}>
      <PersonalInputs />
    </FormGroup>

    <FormGroup className={css(style.form.group)}>
      <PasswordInputs />
    </FormGroup>

    <FormGroup className={css(style.form.group)}>
      <BankInputs />
    </FormGroup>

    <FormGroup className={css(style.form.group)}>
      <Button className={css(style.buttons.button)}>Save</Button>
    </FormGroup>
  </Form>
)

export const PersonalInputs = () => (
  <Row className={css(style.form.row)}>
    <Col xs="12">
      <h4 className={css(style.form.h4)}>basic</h4>
    </Col>
    <Col xs="12" lg="6" className={css(style.inputs.wrapper)}>
      <Input placeholder="Name" className={css(style.inputs.input)} />
    </Col>
    <Col xs="12" lg="6" className={css(style.inputs.wrapper)}>
      <Input placeholder="Surname" className={css(style.inputs.input)} />
    </Col>
    <Col xs="12" className={css(style.inputs.wrapper)}>
      <Input placeholder="Address" className={css(style.inputs.input)} />
    </Col>
    <Col xs="12" lg="2" className={css(style.inputs.wrapper)}>
      <Input placeholder="Zip" className={css(style.inputs.input)} />
    </Col>
    <Col xs="12" lg="10" className={css(style.inputs.wrapper)}>
      <Input placeholder="City" className={css(style.inputs.input)} />
    </Col>
  </Row>
)

export const PasswordInputs = () => (
  <Row className={css(style.form.row)}>
    <Col xs="12">
      <h4 className={css(style.form.h4)}>password</h4>
    </Col>
    <Col xs="12" className={css(style.inputs.wrapper)}>
      <Input
        placeholder="Password"
        type="password"
        className={css(style.inputs.input)}
      />
    </Col>
    <Col xs="12" className={css(style.inputs.wrapper)}>
      <Input
        placeholder="Confirm Password"
        type="password"
        className={css(style.inputs.input)}
      />
    </Col>
  </Row>
)

export const BankInputs = () => (
  <Row className={css(style.form.row)}>
    <Col xs="12">
      <h4 className={css(style.form.h4)}>bank information</h4>
    </Col>
    <Col xs="12" className={css(style.inputs.wrapper)}>
      <Input
        placeholder="Bank account number"
        className={css(style.inputs.input)}
      />
    </Col>
  </Row>
)

export default SettingsForm
