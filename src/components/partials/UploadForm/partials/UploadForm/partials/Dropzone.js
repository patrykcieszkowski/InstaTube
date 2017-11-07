import React from 'react'
import { css } from 'aphrodite'
import { FormGroup, Col, Row } from 'reactstrap'
import Dropzone from 'react-dropzone'

import style from '../../../style'

const ATTR_ACCEPT_ALL = 'video/*,audio/*,image/*'

const RenderDropzone = props => (
  <FormGroup className={css(style.form.group)}>
    <Dropzone
      maxSize={20000000}
      accept={ATTR_ACCEPT_ALL}
      multiple={false}
      onDropRejected={props.onDropRejected}
      onDropAccepted={props.onDropAccepted}
      className={`${css(
        style.dropzone.wrapper
      )} d-flex align-items-center justify-content-center`}
    >
      <Row className={css(style.form.row)}>
        <Col className="justify-content-center">
          <button type="button" className={css(style.dropzone.button)}>
            <i
              className={`la la-plus ${css(style.dropzone.buttonIcon)}`}
              aria-hidden="true"
              title="add"
            />
          </button>
        </Col>
        <RenderTitle {...props} />
      </Row>
    </Dropzone>
  </FormGroup>
)

const RenderTitle = props => {
  console.log(props)
  if (props.state.upload.file) {
    return (
      <Col className="d-flex flex-column justify-content-center">
        <Row className={css(style.form.row)}>
          <span className={css(style.dropzone.titleSpan)}>
            {props.state.upload.file.name}
          </span>
        </Row>
      </Col>
    )
  }

  return (
    <Col className="d-flex flex-column justify-content-center">
      <Row className={css(style.form.row)}>
        <span className={css(style.dropzone.titleSpan)}>Add your file</span>
      </Row>
      <Row className={css(style.form.row)}>
        <span className={css(style.dropzone.descSpan)}>
          Maximum{' '}
          <span className={css(style.dropzone.boldSpan)}>2.00GB / 12h</span>
        </span>
      </Row>
    </Col>
  )
}

export default RenderDropzone
