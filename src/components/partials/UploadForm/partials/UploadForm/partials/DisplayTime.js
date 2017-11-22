import React from 'react'
import { css } from 'aphrodite'
import { FormGroup, Col, Row } from 'reactstrap'
import attrAccept from 'attr-accept'

import style from '../../../style'

const ATTR_ACCEPT_ALL = 'video/*,audio/*,image/*'
const ATTR_ACCEPT_MEDIA = 'video/*,audio/*'

const RenderDisplayTime = props => {
  if (
    (props.state.upload.file &&
      attrAccept(props.state.upload.file, ATTR_ACCEPT_MEDIA)) ||
    Object.keys(props.state.links).filter(a => props.state.links[a]).length
  ) {
    return null
  }

  return (
    <FormGroup className={css(style.form.group)}>
      <Row className={css(style.form.row)}>
        <Col xs="12">
          <h4 className={css(style.sliders.h4)}>Display time</h4>
        </Col>
      </Row>
      <Row className={css(style.form.row)}>
        <Col xs="10" className={css(style.sliders.wrapper)}>
          <input
            type="range"
            min="1"
            max="30"
            value={props.state.displayTime}
            onChange={props.onDisplayTimeChange}
            className={css(style.sliders.slider)}
          />
        </Col>
        <Col xs="2" className={css(style.sliders.labelWrapper)}>
          <span className={css(style.sliders.label)}>
            {props.state.displayTime}sec
          </span>
        </Col>
      </Row>
    </FormGroup>
  )
}

export default RenderDisplayTime
