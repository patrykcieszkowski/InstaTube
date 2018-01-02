import React from 'react'
import { css } from 'aphrodite'
import { FormGroup, Col, Row } from 'reactstrap'

import style from '../../../style'

const RenderValidity = props => (
  <FormGroup className={css(style.form.group)}>
    <Row className={css(style.form.row)}>
      <Col xs="12">
        <h4 className={css(style.sliders.h4)}>Validity period</h4>
      </Col>
    </Row>
    <Row className={css(style.form.row)}>
      <Col xs="5" className={css(style.sliders.wrapper)}>
        <input
          type="range"
          min="0"
          max={`23`}
          value={props.state.validity.hour}
          onChange={props.onValidityHourChange}
          className={css(style.sliders.slider)}
        />
      </Col>
      <Col xs="1" className={css(style.sliders.labelWrapper)}>
        <span className={css(style.sliders.label)}>
          {props.state.validity.hour}h
        </span>
      </Col>
      <Col xs="4" className={css(style.sliders.wrapper)}>
        <input
          type="range"
          min="1"
          max="59"
          value={props.state.validity.minute}
          onChange={props.onValidityMinuteChange}
          className={css(style.sliders.slider)}
        />
      </Col>
      <Col xs="2" className={css(style.sliders.labelWrapper)}>
        <span className={css(style.sliders.label)}>
          {props.state.validity.minute}m
        </span>
      </Col>
    </Row>
  </FormGroup>
)

export default RenderValidity
