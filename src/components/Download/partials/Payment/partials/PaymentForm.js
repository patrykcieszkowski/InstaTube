import React from 'react'
import { css } from 'aphrodite'
import { Form, FormGroup, Input, Button, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

import style from '../style'

export const PaymentForm = props => (
  <Form className={css(style.form.form)} onSubmit={props.onFormSubmit}>
    <Row className={css(style.form.row)}>
      <Col xs='12' xl='6' className={css(style.inputs.wrapper)}>
        <Input
          placeholder='Full Name'
          className={css(style.inputs.input)}
          name={`name`}
          value={props.state.name}
          onChange={props.onTextChange}
        />
      </Col>
      <Col xs='12' xl='6' className={css(style.inputs.wrapper)}>
        <Input
          placeholder='Email'
          className={css(style.inputs.input)}
          name={`email`}
          value={props.state.email}
          onChange={props.onTextChange}
        />
      </Col>
      <Col xs='12' className={css(style.inputs.wrapper)}>
        <Input
          placeholder='Card Number'
          className={css(style.inputs.input)}
          name={`number`}
          value={props.state.number}
          onChange={props.onTextChange}
        />
      </Col>
      <Col xs='12' xl='3' className={css(style.inputs.wrapper)}>
        <Input
          placeholder='MM'
          className={css(style.inputs.input, style.inputs.center)}
          name={`mm`}
          value={props.state.mm}
          onChange={props.onTextChange}
        />
      </Col>
      <Col xs='12' xl='3' className={css(style.inputs.wrapper)}>
        <Input
          placeholder='YY'
          className={css(style.inputs.input, style.inputs.center)}
          name={`yy`}
          value={props.state.yy}
          onChange={props.onTextChange}
        />
      </Col>
      <Col />

      <Col xs='12' xl='3' className={css(style.inputs.wrapper)}>
        <Input
          placeholder='CCV'
          className={css(style.inputs.input, style.inputs.center)}
          name={`ccv`}
          value={props.state.ccv}
          onChange={props.onTextChange}
        />
      </Col>
    </Row>

    <FormGroup>
      <input
        type='checkbox'
        id='payment_rules_checkbox'
        checked={props.state.rules}
        onChange={props.onRulesClick}
        className={css(style.checkbox.checkbox)}
      />
      <label
        htmlFor='payment_rules_checkbox'
        className={css(style.checkbox.label)}
      >
        <span
          className={css(
            props.state.rules ? style.checkbox.spanChecked : style.checkbox.span
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
      <Button className={css(style.buttons.button)}>Pay</Button>
    </FormGroup>
  </Form>
)

export default PaymentForm
