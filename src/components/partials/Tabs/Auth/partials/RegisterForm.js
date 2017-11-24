import React from 'react'
import { css } from 'aphrodite'
import { Form, FormGroup, Input, Button, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

import style from '../style'

export const RegisterForm = props => (
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

    <FormGroup>
      <input
        type='checkbox'
        id='register_rules_checkbox'
        checked={props.rulesValue}
        onChange={props.onRulesClick}
        className={css(style.checkbox.checkbox)}
      />
      <label
        htmlFor='register_rules_checkbox'
        className={css(style.checkbox.label)}
      >
        <span
          className={css(
            props.rulesValue ? style.checkbox.spanChecked : style.checkbox.span
          )}
        >
          I accept the{' '}
          <Link to='/rules' className={css(style.checkbox.link)}>
            rules
          </Link>{' '}
          on the site
        </span>
      </label>
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

export default RegisterForm
