import React from 'react'
import { css } from 'aphrodite'
import { Form, FormGroup, Input, Button, Row, Col } from 'reactstrap'

import countryList from '../../../../countries'
import currencyList from '../../../../currencies'

import style from '../style'

export const SettingsForm = props => (
  <Form className={css(style.form.form)} onSubmit={props.onFormSubmit}>
    <FormGroup className={css(style.form.group)}>
      <PersonalInputs
        profile={props.profile}
        onTextChange={props.onTextChange}
      />
    </FormGroup>

    <FormGroup className={css(style.form.group)}>
      <Button className={css(style.buttons.button)}>Save</Button>
    </FormGroup>
  </Form>
)

export const PersonalInputs = props => (
  <Row className={css(style.form.row)}>
    <Col xs='12' className={css(style.labels.wrapper)}>
      <h4 className={css(style.labels.h4)}>Bank Information</h4>
    </Col>
    <Col xs='12' xl='6' className={css(style.inputs.wrapper)}>
      <Input
        placeholder='Name'
        className={css(style.inputs.input)}
        name={`name`}
        defaultValue={props.profile.name}
        onChange={props.onTextChange}
      />
    </Col>
    <Col xs='12' xl='6' className={css(style.inputs.wrapper)}>
      <Input
        placeholder='Surname'
        className={css(style.inputs.input)}
        name={`surname`}
        defaultValue={props.profile.surname}
        onChange={props.onTextChange}
      />
    </Col>
    <Col xs='12' className={css(style.inputs.wrapper)}>
      <Input
        placeholder='Address'
        className={css(style.inputs.input)}
        name={`address`}
        defaultValue={props.profile.address}
        onChange={props.onTextChange}
      />
    </Col>
    <Col xs='12' xl='2' className={css(style.inputs.wrapper)}>
      <Input
        placeholder='Zip'
        className={css(style.inputs.input)}
        name={`zip`}
        defaultValue={props.profile.zip}
        onChange={props.onTextChange}
      />
    </Col>
    <Col xs='12' xl='10' className={css(style.inputs.wrapper)}>
      <Input
        placeholder='City'
        className={css(style.inputs.input)}
        name={`city`}
        defaultValue={props.profile.city}
        onChange={props.onTextChange}
      />
    </Col>
    <Col xs='12' className={css(style.inputs.wrapper)}>
      <select
        className={css(style.inputs.input, style.inputs.select)}
        defaultValue={props.profile.country}
        name={`country`}
        onChange={props.onTextChange}
      >
        <option value={-1}>Country</option>
        { countryList.map((item, i) => (
          <option key={i} value={item.code}>{ `${item.name} (${item.code})` }</option>
        )) }
      </select>
    </Col>

    <Col xs='12' className={css(style.inputs.wrapper)}>
      <Input
        placeholder='Bank account number'
        className={css(style.inputs.input)}
        name={`bank`}
        defaultValue={props.profile.bank}
        onChange={props.onTextChange}
      />
    </Col>
    <Col xs='8' className={css(style.inputs.wrapper)}>
      <Input
        placeholder='BIC/SWIFT'
        className={css(style.inputs.input)}
        name={`swift`}
        defaultValue={props.profile.swift}
        onChange={props.onTextChange}
      />
    </Col>
    <Col xs='4' className={css(style.inputs.wrapper)}>
      <select
        className={css(style.inputs.input, style.inputs.select)}
        defaultValue={props.profile.currency}
        name={`currency`}
        onChange={props.onTextChange}
      >
        <option value={-1}>Currency</option>
        { currencyList.map((item, i) => (
          <option key={i} value={item.code}>{ `${item.code}` }</option>
        )) }
      </select>
    </Col>
  </Row>
)

export default SettingsForm
