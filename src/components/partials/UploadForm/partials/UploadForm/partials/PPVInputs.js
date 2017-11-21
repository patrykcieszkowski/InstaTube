import React from 'react'
import { css } from 'aphrodite'
import { FormGroup, Col, Row, Input } from 'reactstrap'

import style from '../../../style'

export const InstagramInput = props => {
  if (!props.state.links.instagram) {
    return null
  }

  if (props.instagramAccounts && props.instagramAccounts.length > 0) {
    return (
      <FormGroup className={css(style.form.group, style.views.box)}>
        <Row className={css(style.form.row)}>
          <Col xs className={css(style.ppv.inputWrapper)}>
            <select
              onChange={props.onInstagramInputChange}
              value={props.state.viewTypes.instagram}
              type='text'
              className={css(style.ppv.select)}
            >
              {props.instagramAccounts.slice().map((a, index) => (
                <option key={index} value={a.name}>
                  @{a.name}
                </option>
              ))}
            </select>
          </Col>
        </Row>
      </FormGroup>
    )
  }

  return (
    <FormGroup className={css(style.form.group, style.views.box)}>
      <Row className={css(style.form.row)}>
        <Col xs className={css(style.ppv.inputWrapper)}>
          <Input
            onChange={props.onInstagramInputChange}
            value={props.state.viewTypes.instagram}
            type='text'
            placeholder='@nickname'
            className={css(style.ppv.input)}
          />
        </Col>
      </Row>
    </FormGroup>
  )
}

export const PPVInput = props => {
  if (!props.state.links.ppv) {
    return null
  }

  return (
    <FormGroup className={css(style.form.group, style.views.box)}>
      <Row className={css(style.form.row)}>
        <Col
          xs='1'
          className={`d-flex align-items-center justify-content-center`}
        >
          <span className={css(style.ppv.dollarIcon)}>{props.currency}</span>
        </Col>
        <Col
          xs
          className={css(style.ppv.inputWrapper, style.ppv.inputPPVWrapper)}
        >
          <Input
            onChange={props.onPPVInputChange}
            value={props.state.viewTypes.ppv}
            type='text'
            placeholder='0.00'
            className={css(style.ppv.input)}
          />
        </Col>
      </Row>
    </FormGroup>
  )
}

export default {
  InstagramInput: InstagramInput,
  PPVInput: PPVInput
}
