import React from 'react'
import { css } from 'aphrodite'
import { FormGroup, Col, Row } from 'reactstrap'

import style from '../../../style'

const RenderError = props => {
  if (!props.error) {
    return null
  }

  return (
    <FormGroup
      className={css(style.form.group)}
      style={{ display: !props.error ? `none` : `block` }}
    >
      <Row className={css(style.errors.fileErrorWrapper)}>
        <Col className={css(style.errors.fileErrorBox)} xs="10">
          <span className={css(style.errors.fileErrorSpan)}>
            {props.error}
          </span>
        </Col>
        <Col>
          <span
            className={css(style.errors.fileErrorCloseButton)}
            onClick={props.onErrorCloseClick}
          >
            <i
              className={`la la-close ${css(style.errors.fileErrorCloseIcon)}`}
              aria-hidden="true"
              title="close"
            />
          </span>
        </Col>
      </Row>
    </FormGroup>
  )
}

export default RenderError
